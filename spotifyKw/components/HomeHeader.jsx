import React from 'react';
import { View, Text, StyleSheet,TouchableWithoutFeedback } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeHeader () {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={[styles.textColor], {
                textAlign: 'center',
                color: '#fff'
            }}>Home</Text>
            <View style={{
                position: 'absolute',
                left: "90%"
            }}>
                <TouchableWithoutFeedback onPress={ () => {
                    navigation.navigate('Settings')
                }}>
                    <Ionicons name='md-settings'  size={28} color="white" />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#222327'
    },
    textColor: {
        color: '#fff',
        fontWeight: '700'
    }
  });

