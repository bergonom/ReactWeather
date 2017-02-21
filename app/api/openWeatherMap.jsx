var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=acd74c0992d4ae87b7c7c29cb07f5397&units=imperial';

// api key acd74c0992d4ae87b7c7c29cb07f5397

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then(function(response) {
        if(response.data.cod && response.data.message) {
          throw new Error(response.response.data.message);
        } else {
          return response.data.main.temp;
        }
      }, function(response) {
        debugger;
        throw new Error(response.response.data.message);
      })
  }
}
