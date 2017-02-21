var React = require('react');
var PropTypes = React.PropTypes;

var WeatherMessage = ({temp, loc}) => {
    return (
      <div>
        <h3>It is {temp} degrees in {loc} </h3>
      </div>
    );
  }

module.exports = WeatherMessage;
