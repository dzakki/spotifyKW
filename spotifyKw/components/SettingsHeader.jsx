import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader (props) {
    const { navigation } = props
    const titlePage = 'Settings'

    return (
        <View style={styles.container}>
            <View style={styles.btnBack}>
                <TouchableHighlight 
                    onPress={() => navigation.goBack()}
                    underlayColor="transparent"
                >
                    <Ionicons name='md-arrow-back' size={29} color="white"/>
                </TouchableHighlight>
            </View>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{titlePage}</Text>
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
    btnBack: {
        position: 'absolute',
        zIndex: 999,
        marginLeft: 10,
        width: 30,
    },
    titleWrapper: {
        alignItems: 'center',
    },
    title: {
        fontWeight: '700',
        color: '#fff'
    }
})