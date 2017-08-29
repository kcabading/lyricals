
export default (string) => {
    var myJSONString = JSON.stringify(string);
    return myJSONString.replace(/\\n/g, "\\n")
                                        .replace(/\\'/g, "\\'")
                                        .replace(/\\"/g, '\\"')
                                        .replace(/\\&/g, "\\&")
                                        .replace(/\\r/g, "\\r")
                                        .replace(/\\t/g, "\\t")
                                        .replace(/\\b/g, "\\b")
                                        .replace(/\\f/g, "\\f");
}