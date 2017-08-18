import $ from 'jquery';

export default (html) => {
    // initialise returned object
    let objResults = {
        artists: [],
        albums: [],
        songs: []
    }    
    let objPanels = $(html).find('div.panel')
    objPanels.each((panel_index, element) => {        
        var objRows = $(element).find('table tr a')
        $(objRows).each((index, item) => {            
            switch(panel_index) {
                case 0:
                    objResults.artists.push({
                        name: $(item).text(),
                        link: $(item).attr("href"),
                    })
                    break;
                case 1:
                    objResults.albums.push({
                        name: $(item).text(),
                        link: $(item).attr("href"),
                    })
                    break;
                case 2:
                    objResults.songs.push({
                        name: $(item).text(),
                        link: $(item).attr("href"),
                    })
                    break;
                default:
                    break;
            }
        })
    })
    console.log(objResults);
    return objResults;
}