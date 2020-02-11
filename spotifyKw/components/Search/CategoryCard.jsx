import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function CategoryCard({ category }) {

    return (
        <View style={styles.col}>
            <View style={{
                backgroundColor: category.item.backgroundColor,
                height: '100%',
                borderRadius: 5,
                justifyContent: 'center'
            }}>
                <Text style={styles.textWhite}>{category.item.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    col: {
        width: '50%',
        height: 100,
        padding: 8,
    },
    textWhite: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 16
    }
})