import React from 'react';
import { View, Text, StyleSheet } from "react-native";

export default function HomeHeader () {
    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#222327'
    },
    textColor: {
        color: '#fff',
        fontWeight: '700'
    }
  });

