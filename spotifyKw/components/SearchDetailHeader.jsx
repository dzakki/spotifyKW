import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchDetailHeader() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{
                    marginRight: 10
                }}>
                    <Ionicons name='md-search' size={25} color="#999"/>
                </View>
                <View>
                    <TextInput 
                        placeholder='Search artists, songs and playlist'     
                    />
                </View>
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
    wrapper: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30
    }
})