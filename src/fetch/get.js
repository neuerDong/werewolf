/**
 * External dependencies
 */
import 'whatwg-fetch';
import 'es6-promise';

const queryString = require('querystring');
const parseJSON = (response) => response.json();

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
};

const fetchGet = (url, params) => {
    if (typeof params === 'object') {
        url += '?' + queryString.stringify(params);
    }

    return fetch(url, {
        method: 'GET',
        /*headers: {
         'Authorization': 'Bearer ' + Cookie.get(tokenId)
         }*/
    });
};

export const get = (url, params) => {
    return fetchGet('http://ms' + API_ENV + '.corp.36jr.com/api/' + url,
        params).then(checkStatus).then(parseJSON).then((res) => {
        return res;
    }).catch(err => {
        console.log(err);
    });
};
