let jsonpUrl = 'https://www.metaweather.com/api/location/search/?query=san&callback=processWeather';

function requestJSONP(url) {
  var script = document.createElement('script');
  script.src = url;
  script.onload = function () {
    this.remove();
  };
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(script);
}
  
function processWeather(data) {
  console.log(data.query);
}
  
requestJSONP(jsonpUrl);