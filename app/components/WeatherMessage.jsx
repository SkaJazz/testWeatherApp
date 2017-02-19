var React = require('react');

var WeatherMessage = ({temp, location, country}) => {
	return (
		<h3>Погода в {location} ({country}) около {temp}</h3>
	);
}

module.exports = WeatherMessage;