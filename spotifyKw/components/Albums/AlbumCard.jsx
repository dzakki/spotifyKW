import React from 'react';
import {TouchableHighlight, View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AlbumCard(props) {
    const navigation = useNavigation()
    const { item } = props
    // console.log(item, '=0-=-=-===0-=0=-9-9-9')
    // item.titlePage = item.name
    return (
        <TouchableHighlight
            underlayColor="transparent"
            onPress={() => {
                navigation.navigate('Album details', { item })
            }}
        >
            <View style={styles.album}>
                <Image
                    style={{
                        width: '100%', 
                        height: 180,
                        opacity: 0.9
                    }}
                    source={{uri: item.images[1].url}}
                />
                <Text style={styles.textWhite}>{item.name}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    album: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    textWhite: {
        color: '#999',
        fontWeight: 'bold'
    },
})