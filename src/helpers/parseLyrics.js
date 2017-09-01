import $ from 'jquery';

export default (html) => {
    
    let objMainContent = $(html).closest("div.main-page");
    let objLyricsContent = $(objMainContent).find('.col-xs-12');    
    let strLyricsHtml = $(objLyricsContent).find('div:not([class])').html();
    let strSongTitle = $(objLyricsContent).find('div.ringtone').next().text();
    let strArtistName = $(objLyricsContent).find('div.lyricsh').find("b").text().replace("Lyrics","");
    
    let arAlbums = []
    // loop through albums
    $(objLyricsContent).find('div.album-panel').find("a").each(function(index,album){
        arAlbums.push($(album).text());
    });

    return {
        name: strSongTitle,
        albums: arAlbums,
        artist: strArtistName,
        lyrics: strLyricsHtml
    }
}