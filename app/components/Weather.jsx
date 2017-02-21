var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var PropTypes = React.PropTypes;

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location)
      .then(function(temp) {
        console.log("temp", temp);
        that.setState({
          isLoading: false,
          location: location,
          temp: temp
        })
      }, function(errorMessage) {

        that.setState({
          isLoading: false
        })
      });
  },

  render: function() {
    var {isLoading, location, temp} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3>Fetching Weather ...</h3>;
      } else if(temp && location) {
        return <WeatherMessage loc={location} temp={temp}/>;
      }
    }

    return (
      <div>
        <h3>Get Weather</h3>
          <WeatherForm onSearch={this.handleSearch} />
          {renderMessage()}
      </div>
    );
  }

});

module.exports = Weather;