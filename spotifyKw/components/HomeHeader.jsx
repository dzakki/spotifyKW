import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeHeader () {
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
                <Ionicons name='md-settings'  size={28} color="white" />
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

