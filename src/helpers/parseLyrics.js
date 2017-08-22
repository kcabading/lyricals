import $ from 'jquery';

export default (html) => {
    
    let objMainContent = $(html).closest("div.main-page");
    let objLyricsContent = $(objMainContent).find('.col-xs-12');    
    let strLyricsHtml = $(objLyricsContent).find('div:not([class])').html();
    let strSongTitle = $(objLyricsContent).find('div.ringtone').next().text();
    
    return {
        title: strSongTitle,
        lyrics: strLyricsHtml
    }
}