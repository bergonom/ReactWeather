var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'
    }
  },

  propTypes: {
    message: React.PropTypes.string.isRequired,
    title: React.PropTypes.string
  },

  componentDidMount: function() {
    var {message, title} = this.props;
    var modalMarkup = (
      <div id="Error-Modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($("#Error-Modal"));
    modal.open();
  },

  render: function() {
    return (
      <div>
      </div>
    )
  }
});

module.exports = ErrorModal;
