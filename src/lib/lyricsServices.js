// inialise headers
var myInit = { 
    method: 'GET',
    headers: new Headers({ 
        "Access-Control-Allow-Origin": '*', 
        "Content-type": "text/html",
        "mode": "cors"
    })     
}

export const searchTerm = (term) => {
    console.log('searching for' + term);
    return fetch(`/search?q=` + term, myInit)
        .then(res => res.text())
}

export const getLyrics = (url) => {
    console.log('getting lyrics for: ' + url);
    return fetch(`/lyrics?p=` + encodeURI(url))
        .then(res => res.text())
}

export const getDefault = () => {

    return fetch('http://localhost:3004/default')
        .then(res => res.json())
}

export const getSavedData = () => {

    return fetch(`/saved`)
        .then(res => res.json())

}

