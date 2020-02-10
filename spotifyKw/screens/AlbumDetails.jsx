import React from 'react';
import { 
    View, 
    Text, 
    TouchableHighlight, 
    ScrollView, 
    Image,
    StyleSheet 
} from 'react-native';

export default class DetailAlbum extends React.Component {

    render(){
        return (
            <ScrollView>
                <View style={{
                    marginTop: 10
                }}></View>
                <View style={styles.HeaderContainer}>
                    <Image
                        style={{
                            width: '50%', 
                            height: 200,
                            opacity: 1,
                            backgroundColor: 'transparent'
                        }}
                        source={{uri: 'https://yt3.ggpht.com/a/AGF-l795x6DhDU9NkZFUw_6dqoiBtR9yQc7GaBtBhQ=s900-c-k-c0xffffffff-no-rj-mo'}}
                    />
                <Text style={styles.titleAlbum}>Avenged sevendfold</Text>
                <Text style={styles.madeAlbum}>by Spotify</Text>
                </View>
            </ScrollView>
        )
    }

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