

export const searchTerm = (term) => {
    console.log('searching for' + term);
    return fetch('https://search.azlyrics.com/search.php?q=' + term)
        .then(res => res.text())
}

export const getDefault = () => {

    return fetch('http://localhost:3004/default')
        .then(res => res.json())
}