
import EscapeToJson from '../helpers/escapeStringToJson'

const API = "http://localhost:9000/api";

var myInit = { 
    method: 'GET',
    headers: new Headers({ 
        "Access-Control-Allow-Origin": '*', 
        "Content-type": "text/json",
    })     
}

export const searchTerm = (term) => {
    console.log('searching for' + term);
    return fetch(`${API}/search?q=` + term, myInit)
        .then(res => res.text())
}

export const getLyrics = (url) => {
    console.log('getting lyrics for: ' + url);
    return fetch(`${API}/lyrics?p=` + encodeURI(url))
        .then(res => res.text())
}

export const saveLyrics = (data) => {
    
    let strPostData = EscapeToJson(data);    
    console.log('saving lyrics');
    console.log(strPostData);    
    console.log(typeof strPostData);

    return fetch(`${API}/lyrics`, { 
                method: 'POST',
                body: strPostData,
                headers: new Headers({                     
                    "Content-type": "application/json",
                })     
            })
            .then(res => res.text())
}

export const getDefault = () => {

    return fetch('http://localhost:3004/default')
        .then(res => res.json())
}

export const getSavedData = () => {

    return fetch(`${API}/saved`)
        .then(res => res.json())

}

