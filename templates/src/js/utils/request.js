const request = (url, data, moreHeaders, method) => {
    let headers = {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    };

    headers = moreHeaders == undefined ? headers : { ...headers, moreHeaders };

    let body = data;

    if(!(data instanceof FormData)) {
        body = JSON.stringify(data);
        headers = {
            ...headers,
            "Content-Type": 'application/json',
        }
    }

    return fetch(url, {
            method,
            credentials: 'same-origin',
            headers: headers,
            body: body
        })
        .then(blob => {
            const { status } = blob;
            const data = blob.json();
            if (status === 200) {
              return data;
            }
            throw data;
        });
}

export default class Request {
    static get(url, data, headers) {
        return request(url, data, headers, 'GET');
    }

    static post(url, data, headers) {
        return request(url, data, headers, 'POST');
    }

    static put(url, data, headers) {
        return request(url, data, headers, 'PUT');
    }

    static delete(url, data, headers) {
        return request(url, data, headers, 'DELETE');
    }
}