import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function AlbumDetailHeader(props) {
    const { item } = props
    return (
        <View style={styles.HeaderContainer}>
            <Image
                style={{
                    width: '50%', 
                    height: 200,
                    opacity: 1,
                    backgroundColor: 'transparent'
                }}
                source={{uri: item.images[1].url}}
            />
            <Text style={styles.titleAlbum}>{ item.name }</Text>
            <Text style={styles.madeAlbum}>by Spotify</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleAlbum: {
        marginTop: 10,
        fontFamily: 'sans-serif',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    madeAlbum: {
        marginTop: 10,
        fontWeight: '300',
        color: '#fff'
    }
})