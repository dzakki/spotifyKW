import { combineReducers } from 'redux';
import spotify from './spotifyReducer';
import { ISLOGGED, ERRORS, SUCCESS, GENERAL_ONLOAD } from '../actionTypes';

const initialState = {
    isLogged: null,
    generalOnload: false,
    errors: null,
    success: null
}

function general(state = initialState, action) {
    switch (action.type) {
        case ISLOGGED:
            return {
                ...state,
                generalOnload: false,
                isLogged: action.data
            }
        case GENERAL_ONLOAD:
            return {
                ...state,
                generalOnload: true
            }
        case ERRORS:
            return {
                ...state,
                generalOnload: false,
                errors: action.data
            }
        case SUCCESS:
            return {
                ...state,
                generalOnload: false,
                success: action.data
            }
        default:
            return state
    }
}

export default combineReducers({
    general,
    spotify
})