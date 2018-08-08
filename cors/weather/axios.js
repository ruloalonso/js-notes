const axios = require('axios');

axios.get('https://www.metaweather.com/api/location/search/?query=san')
    .then(response => {
        response.data.forEach(city => {
            axios.get(`https://www.metaweather.com/api/location/${city.woeid}/`)
                .then(response => {
                    let humAvg = response.data.consolidated_weather.reduce(function (acc, curr) {
                        return acc + curr.humidity;
                      }) / response.data.consolidated_weather.length;
                    console.log(`${city.title} has ${response.data.consolidated_weather[0].humidity}% of humidity (average)`);
                })
        });
    })
    .catch(function (error) {
     console.log(error);
});