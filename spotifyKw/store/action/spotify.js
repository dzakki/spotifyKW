import { AsyncStorage } from 'react-native';
import { 
    RECENTLY_PLAYED, 
    ONLOAD_RECENTLY_PLAYED,
    ONLOAD_TRACKS,
    TRACKS
} from '../actionTypes';
import { ACCESS_TOKEN, REFRESH_TOKEN, EXPIRATION_TIME } from '../storageTypes';
import { _refreshTokenAction } from './auth';
import Q from 'q';
import SpotifyWebApi from 'spotify-web-api-js';

const _validToken = async () => {
    const tokenExpirationTime  = await AsyncStorage.getItem(EXPIRATION_TIME)
    if (new Date().getTime() > tokenExpirationTime) {
        const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN);
        await _refreshTokenAction(refreshToken)
    }
    const accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
    return accessToken
}

const lastSunday = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const lastSunday = new Date(today.setDate(today.getDate()-today.getDay()));
    return lastSunday.getTime()
}
export const getRecentlyPlayed =  () => async dispatch => {
    dispatch({
        type: ONLOAD_RECENTLY_PLAYED
    })
    try {
        const validToken = await _validToken()
        const after = new Date().getTime()
        const before = lastSunday()
        const url = `https://api.spotify.com/v1/me/player/recently-played?type=track&limit=10&after=${before}`;
        const res = await fetch(url, {
            headers: {
                "Accept" : "application/json",
                "Authorization": `Bearer ${validToken}`
            }
        })
        const resJson = await res.json()
        // console.log(resJson)
        dispatch({
            type: RECENTLY_PLAYED,
            data: resJson.items
        })
    } catch (error) {
        console.log(error, 'getRecentlyPlayed')
        dispatch({
            type: RECENTLY_PLAYED,
            data: []
        })
    }
}

export const getTracks = (url) => async dispatch => {
    dispatch({
        type: ONLOAD_TRACKS
    })
    try {
        const validToken = await _validToken()
        url = `${url}/tracks?limit=12`;
        const res = await fetch(url, {
            headers: {
                "Accept" : "application/json",
                "Authorization": `Bearer ${validToken}`
            }
        })
        const resJson = await res.json()
        dispatch({
            type: TRACKS,
            data: resJson.items
        })
    } catch (error) {
        console.log(error, 'getTracks')
        dispatch({
            type: TRACKS,
            data: []
        })
    }
}
