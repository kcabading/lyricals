import CONSTANTS from '../constants/create'

const initState = {
    name: "",
    artist: "",
    album: "",
    lyrics: "",
    success: false,
    message: "",
    loading: false
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case CONSTANTS.SAVE_NEW_LYRICS:
            return {
                ...state, 
                success: false, 
                message: "",
                loading: true
            }
        case CONSTANTS.SAVE_NEW_LYRICS_RESPONSE:
            return {
                ...state, 
                success: true,
                message: "Lyrics Saved",
                loading: false
            }
        case CONSTANTS.FORM_CHANGE:
            let newState;
            switch(action.payload.input) {
                case "name":
                    newState = {
                        ...state, 
                        name: action.payload.value
                    }
                    break;
                case "artist":
                    newState = {
                        ...state, 
                        artist: action.payload.value
                    }
                    break;
                case "album":
                    newState = {
                        ...state, 
                        album: [action.payload.value]
                    }
                    break;
                case "lyrics":
                    newState = {
                        ...state, 
                        lyrics: action.payload.value
                    }
                    break;
                default:
                    newState = state;
                    break;
            }               
            return newState
        default:
            return state;            
    }
};