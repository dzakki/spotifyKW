import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function MusicList(props) {
    const { item } = props.item
    console.log(item.id)
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback onPress={ () =>  navigation.navigate('PlayTrack', item ) }>
            <View style={styles.musicWrapper}>
                <View style={{
                    width: '95%',
                    justifyContent: "center",
                }}>
                    <Text style={styles.textWhite}>
                        {item.name}
                    </Text>
                    <Text style={styles.textLight}>
                        {item.artists[0].name}
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
        </TouchableWithoutFeedback>
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