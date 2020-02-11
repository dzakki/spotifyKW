import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { AuthSession } from 'expo';
import spotifyConfig from '../config/spotify';
import { loginAction } from '../store/action/auth';

export default function Login() {
    const dispatch = useDispatch()

    const _spotifyCredentials = spotifyConfig('https://auth.expo.io/@dzakki/spotifykw');
    const _getAuthorizationCode = async  () => {
        const scopesArr = ['user-modify-playback-state','user-read-currently-playing','user-read-playback-state','user-library-modify',
                    'user-library-read','playlist-read-private','playlist-read-collaborative','playlist-modify-public',
                    'playlist-modify-private','user-read-recently-played','user-top-read'];
        const scopes = scopesArr.join(' ');
        let authUrl = `https://accounts.spotify.com/authorize?response_type=code&`;
                    authUrl += `client_id=${_spotifyCredentials.clientId}&scope=${encodeURIComponent(scopes)}&`;
                    authUrl += `redirect_uri=${encodeURIComponent(_spotifyCredentials.redirectUri)}`;
        try {
            const result = await AuthSession.startAsync({
                authUrl
            })
            return result.params.code
        } catch (err) {
            console.log(err, ' _getAuthorizationCode')
        }
    }

    const _login = async () => {
        const spotifyCredentials = await _getAuthorizationCode() 
        dispatch(loginAction(spotifyCredentials))
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.textWhite, styles.title]}>Spotify KW</Text>
            <TouchableOpacity style={styles.button} onPress={_login}>
                <Text style={[styles.textWhite, styles.btnText]}>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWhite: {
      color: '#fff' 
    },
    title: {
        fontFamily: 'sans-serif-medium',
        fontSize: 25,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#5DBF5A',
        padding: 8,
        borderRadius: 5,
        width: 100,
        justifyContent: 'center',
    },
    btnText: {
        textAlign: 'center',
        fontWeight: '700'
    }
})