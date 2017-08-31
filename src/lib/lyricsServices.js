
const EscapeToJson = require('../helpers/escapeStringToJson')

var myInit = { 
    method: 'GET',
    headers: new Headers({ 
        "Access-Control-Allow-Origin": '*', 
        "Content-type": "text/json",
    })     
}

export const searchTerm = (term) => {
    console.log('searching for' + term);
    return fetch(`/api/search?q=` + term, myInit)
        .then(res => res.text())
}

export const getLyrics = (url) => {
    console.log('getting lyrics for: ' + url);
    return fetch(`/api/lyrics?p=` + encodeURI(url))
        .then(res => res.text())
}

export const saveLyrics = (data) => {
    
    let strPostData = EscapeToJson(data);    
    console.log('saving lyrics');
    console.log(strPostData);    
    console.log(typeof strPostData);

    return fetch(`/api/lyrics`, { 
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

    return fetch(`/api/saved`)
        .then(res => res.json())

}