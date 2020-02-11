import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MusicList(props) {
    const { item } = props.item
    return (
        <View style={styles.musicWrapper}>
            <View style={{
                width: '95%',
                justifyContent: "center",
            }}>
                <Text style={styles.textWhite}>
                    {item.title}
                </Text>
                <Text style={styles.textLight}>
                    {item.band}
                </Text>
            </View>
            <View style={{
                justifyContent: "center",
                width: '5%'
            }}>
                <Text style={[styles.textLight, {
                    textAlign: 'right',
                }]}>
                    <Ionicons name='md-more' size={25} color="#999"/>
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    musicWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        marginRight: 10,
        marginLeft: 10
    },
    textWhite: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    textLight: {
        fontWeight: '100',
        color: '#999',
    }
})