import { 
    RECENTLY_PLAYED, 
    ONLOAD_RECENTLY_PLAYED,
    TRACKS,
    ONLOAD_TRACKS
} from '../actionTypes';

const initialState = {
    recentlyPlayed: [],
    onload_recentlyPlayed: false,
    tracks: [],
    onload_tracks: false
}

export default function spotifyReducer(state = initialState, action) {
    switch (action.type) {
        case RECENTLY_PLAYED:
            return {
                ...state,
                recentlyPlayed: action.data,
                onload_recentlyPlayed: false
            }
        case ONLOAD_RECENTLY_PLAYED:
            return {
                ...state,
                onload_recentlyPlayed: true
            }
        case TRACKS:
            return {
                ...state,
                tracks: action.data,
                onload_tracks: false
            }
        case ONLOAD_TRACKS:
            return {
                ...state,
                onload_tracks: true
            }
        default:
            return state
    }
}