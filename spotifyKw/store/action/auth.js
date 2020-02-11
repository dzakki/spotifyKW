import { ERRORS, ISLOGGED, SUCCESS, GENERAL_ONLOAD } from '../actionTypes';
import { ACCESS_TOKEN, REFRESH_TOKEN, EXPIRATION_TIME } from '../storageTypes';
import { AsyncStorage } from 'react-native';
import spotifyConfig from '../../config/spotify';
import { encode as btoa } from 'base-64';

const _spotifyCredentials = spotifyConfig('https://auth.expo.io/@dzakki/spotifykw');

export const _refreshTokenAction =  (token) => async dispatch => {
    dispatch({ type: GENERAL_ONLOAD });
    try {
        const credsB64 = btoa(`${_spotifyCredentials.clientId}:${_spotifyCredentials.clientSecret}`);
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${credsB64}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=refresh_token&refresh_token=${token}`,
        })
        const respJson = await response.json()
        const {
            access_token: accessToken,
            refresh_token: refreshToken,
            expires_in: expiresIn,
        } = respJson;
        const expirationTime = new Date().getTime() + expiresIn * 1000;
        // console.log('access_token: '+accessToken, 'refreshToken: '+ refreshToken, 'expirationTime: '+expirationTime)
        await AsyncStorage.setItem('accessToken',  accessToken.toString())
        await AsyncStorage.setItem('refreshToken', refreshToken.toString())
        await AsyncStorage.setItem('expirationTime', expirationTime.toString()) 
        dispatch({
            type: ISLOGGED,
            data: {
                token: accessToken,
                refreshToken: refreshToken,
                expirationTime: expirationTime
            }
        })
    } catch (error) {
        console.log(error, '_refreshTokenAction')
    }
}
export const isLoggedAction =  () => async (dispatch, state) => {
    dispatch({ type: GENERAL_ONLOAD });
    const { general } = state();
    if (!general.isLogged) {
        const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN);
        const expirationTime = await AsyncStorage.getItem(EXPIRATION_TIME);
        if (accessToken && refreshToken && expirationTime) {
            if (new Date().getTime() > Number(expirationTime)) {
                dispatch(_refreshTokenAction(token))
            }else{
                dispatch({
                    type: ISLOGGED,
                    data: {
                        token: accessToken,
                        refreshToken: refreshToken,
                        expirationTime: expirationTime
                    }
                })
            }
        }
    }else{
        const {token, refreshToken, expirationTime} = general
        if (token && refreshToken && expirationTime) {
            if (new Date().getTime() > Number(expirationTime)) {
                dispatch(_refreshTokenAction(token))
            }
        }else{
            dispatch({
                type: ISLOGGED,
                data: null
            })
        }
    }
}

export const loginAction = (authorizationCode) => async (dispatch, state) => {
    dispatch({ type: GENERAL_ONLOAD });
    try {
        const credsB64 = btoa(`${_spotifyCredentials.clientId}:${_spotifyCredentials.clientSecret}`);
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                Authorization: `Basic ${credsB64}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${encodeURIComponent(_spotifyCredentials.redirectUri)}`,
        })
        const respJson = await response.json()
        const {
            access_token: accessToken,
            refresh_token: refreshToken,
            expires_in: expiresIn,
        } = respJson;
        const expirationTime = new Date().getTime() + expiresIn * 1000;
        console.log('access_token: '+accessToken, 'refreshToken: '+ refreshToken, 'expirationTime: '+expirationTime)
        await AsyncStorage.setItem('accessToken',  accessToken.toString())
        await AsyncStorage.setItem('refreshToken', refreshToken.toString())
        await AsyncStorage.setItem('expirationTime', expirationTime.toString()) 
        dispatch({
            type: ISLOGGED,
            data: {
                token: accessToken,
                refreshToken: refreshToken,
                expirationTime: expirationTime
            }
        })
    } catch (error) {
        console.log(error, 'loginAction')
    }
}


