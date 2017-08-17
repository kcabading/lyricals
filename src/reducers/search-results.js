const initState = {
    results : [
        {
            title : "Song 1",
            album : "Album 1",
            artist : "Artist 1"
        },
        {
            title : "Song 2",
            album : "Album 2",
            artist : "Artist 2"
        },
        {
            title : "Song 3",
            album : "Album 3",
            artist : "Artist 3"
        }
    ]
}
export default (state = initState, action) => {

    switch (action.type) {        
        default:
            return state;
            break;
    }    
};