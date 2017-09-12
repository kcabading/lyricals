import Constants from '../constants/create'

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
        case Constants.SAVE_NEW_LYRICS:
            return {
                ...state, 
                success: false, 
                message: "",
                loading: true
            }
        case Constants.SAVE_NEW_LYRICS_RESPONSE:
            return {
                ...state, 
                success: true,
                message: "Lyrics Saved",
                loading: false,
                name: "",
                artist: "",
                album: "",
                lyrics: ""
            }
        case Constants.FORM_CHANGE:
            let newState;
            switch(action.payload.input) {
                case "name":
                    newState = {
                        ...state, 
                        name: action.payload.value,
                        success: false, 
                        message: "",
                    }
                    break;
                case "artist":
                    newState = {
                        ...state, 
                        artist: action.payload.value,
                        success: false, 
                        message: "",
                    }
                    break;
                case "album":
                    newState = {
                        ...state, 
                        album: [action.payload.value],
                        success: false, 
                        message: "",
                    }
                    break;
                case "lyrics":
                    newState = {
                        ...state, 
                        lyrics: action.payload.value,
                        success: false, 
                        message: "",
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