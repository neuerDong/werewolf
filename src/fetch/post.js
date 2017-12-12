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

const objparams = (obj) => {
    const result = queryString.stringify(obj);

    return result;
};

export const post = (url, paramsObj) => {
    return fetch('http://ms' + API_ENV + '.corp.36jr.com/api/' + url, {
        method: 'POST',
        headers: {
            /*'Authorization': 'Bearer ' + Cookie.get(tokenId),*/
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: objparams(paramsObj),
    }).then(checkStatus).then(parseJSON).then((res) => {
        return res;
    }).catch(err => {
        console.log(err);
        return false;
    });
};
