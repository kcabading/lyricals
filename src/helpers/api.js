'use strict';

import axios from 'axios';

class Actions {

    static get(url, query, store, typeReq, typeRes, callback) {
        
        const request = { method: 'get', url, query };        
        this.makeRequest(request, store, typeReq, typeRes, callback);
    }

    static put(url, data, store, typeReq, typeRes, callback) {

        const request = { method: 'put', url, data };
        this.makeRequest(request, store, typeReq, typeRes, callback);
    }

    static post(url, data, store, typeReq, typeRes, callback) {

        const request = { method: 'post', url, data };
        this.makeRequest(request, store, typeReq, typeRes, callback);
    }

    static delete(url, query, store, typeReq, typeRes, callback) {

        const request = { method: 'delete', url, query };
        this.makeRequest(request, store, typeReq, typeRes, callback);
    }

    static makeRequest(request, store, typeReq, typeRes, callback) {
        
        store.dispatch({
            type: typeReq,
            request
        });

        axios(request)
            .then((res) => {
                debugger;
                store.dispatch({
                    type: typeRes,
                    err,
                    response
                });                 
                
                if (callback) {
                    callback(err, response);
                }    
            });
    }
}

module.exports = Actions;