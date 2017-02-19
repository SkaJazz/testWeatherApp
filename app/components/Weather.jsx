var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},

	handleSearch: function(location) {
		var that = this;

		this.setState({isLoading: true, temp: false});

		openWeatherMap.getTemp(location).then(function(tempInfo) {
			that.setState({
				location: location,
				temp: tempInfo.temp,
				country: tempInfo.country,
				isLoading: false
			})
		}, function(errorMessage) {
			console.log(errorMessage+'!!!!!!!!!');
			that.setState({isLoading: false});
			console.log(that.state.temp);
		})
	},

	render: function() {	

		var {isLoading, location, country, temp} = this.state;

		function renderMessage() {
			if (isLoading) {
				return "Запрашиваем погоду..."
			} else if (temp && location && country) {
				return <WeatherMessage location={location} temp={temp} country={country}/>
			}
		}

		return (
		<div>
			<h3>Weather Component</h3>
			<WeatherForm onSearch={this.handleSearch}/>
			{renderMessage()}
		</div>
		);
	}
});

module.exports = Weather;