import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchHeader() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback 
                onPress={() => navigation.navigate('SearchDetail')}
            >
                <View 
                    style={styles.wrapper}
                >
                    <View 
                        style={{
                            marginRight: 10,
                            justifyContent: 'center',
                        }}
                    >
                        <Ionicons 
                            name='md-search' 
                            size={25} 
                            color="#999" 
                        />
                    </View>
                    <View 
                        style={{
                            justifyContent: 'center',
                        }}
                    >
                        <Text>
                            Search artists, songs and playlist
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#fff',
    },
    wrapper: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
})