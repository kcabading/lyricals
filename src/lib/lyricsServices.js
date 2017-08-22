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
    return fetch('https://search.azlyrics.com/search.php?q=' + term, myInit)
        .then(res => res.text())
}

export const getLyrics = (url) => {
    console.log('getting lyrics for: ' + url);
    return fetch(url)
        .then(res => res.text())
}


export const getDefault = () => {

    return fetch('http://localhost:3004/default')
        .then(res => res.json())
}

