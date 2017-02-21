var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var PropTypes = React.PropTypes;

var Weather = React.createClass({
  getInitialState: function() {
    return {
      errorMessage: undefined,
      isLoading: false
    }
  },

  handleSearch: function(location) {
    var that = this;

    this.setState({
      errorMessage: undefined,
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
          errorMessage: errorMessage.message,
          isLoading: false
        })
      });
  },

  render: function() {
    var {errorMessage, isLoading, location, temp} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching Weather ...</h3>;
      } else if(temp && location) {
        return <WeatherMessage loc={location} temp={temp}/>;
      }
    }

    function renderError() {
      if(typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    );
  }

});

module.exports = Weather;
