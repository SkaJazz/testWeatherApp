var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=899465d01595a60c3596461712a9be89&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res) {
			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				var tempInfo = {};
				tempInfo.temp = res.data.main.temp;
				tempInfo.country = res.data.sys.country;
				return tempInfo;	
			}
		}, function(res) {
			throw new Error(res.data.message);
		});
	}
}