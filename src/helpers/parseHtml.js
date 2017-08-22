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
        
        let group = $(element).find('span.text-lowercase').text();

        var objRows = $(element).find('table tr a')
        $(objRows).each((index, item) => {            
            switch(group) {
                case "Artists":
                    objResults.artists.push({
                        name: $(item).text(),
                        link: $(item).attr("href"),
                    })
                    break;
                case "Albums":
                    objResults.albums.push({
                        name: $(item).text(),
                        link: $(item).attr("href"),
                    })
                    break;
                case "Songs":
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