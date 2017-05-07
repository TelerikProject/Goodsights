function request(url, method, contentType = '', body = {}, headers = {}) {
    const promise = new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: method,
            data: JSON.stringify(body),
            contentType: contentType,
            headers: headers,
            success: (data) => resolve(data),
            error: (err) => reject(err)
        });
    });

    return promise;
}

function get(url) {
    return request(url, 'GET');
}

function put(url, body, headers = {}) {
    return request(url, 'PUT', 'application/json', body, headers);
}

function post(url, body, headers = {}) {
    return request(url, 'POST', 'application/json', body, headers);
}


const requester = {
    post,
    put,
    get,
};

export { requester };