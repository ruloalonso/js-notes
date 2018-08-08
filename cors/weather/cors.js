const url = 'https://www.metaweather.com/api/location/search/?query=san';
const proxy = 'http://crossorigin.me/http://www.metaweather.com/api/location/search/?query=san';

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            }
        };
    xhr.open(method, url, true);
    return xhr;
}

var xhr = createCORSRequest('GET', proxy);

xhr.send();