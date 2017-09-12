import $ from 'jquery';

export default (html) => {

    let arResults = [];
    let objMainContent = $(html).closest("div.main-page");
    let objResultsContent = $(objMainContent).find('.col-xs-12');    
    let objResultsTable = $(objResultsContent).find('table').html();
    let objRows = $(objResultsTable).find('tr:gt(0)');
    // loop through
    $(objRows).each((index, item) => {
        // push to results
        arResults.push({
            name : $(item).find("a").text(),
            link: $(item).find("a").attr("href"),
            artist: $(item).find("b:gt(0)").text()
        });
    })
    // return results
    return arResults
}