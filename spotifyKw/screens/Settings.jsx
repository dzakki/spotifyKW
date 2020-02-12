import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from "../store/action/auth";

export default function Settings(){
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity 
                onPress={() => {
                    Alert.alert(
                        'Logout',
                        'Are you sure want to log out from Spotify KW',
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => dispatch(logoutAction())},
                        ],
                        {cancelable: false},
                    );
                }}
            >
                <View style={styles.container}>
                        <Ionicons name='md-power' size={29} color="white"/>
                        <Text style={styles.textLogout}>Log out</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        marginLeft: 15,
        height: 30,
    },
    textLogout: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 10,
        textAlignVertical: 'center',
    }
})