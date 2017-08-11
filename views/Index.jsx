var React = require('react');
var hitbtc = require('../hitbtc.js')

class HelloMessage extends React.Component {
  getQuotes() {
    console.log('hi greggums')
  }

  render() {
    return (
      <div>
        <h1 onClick={this.getQuotes}>Hello {this.props.name}</h1>
      </div>
    );
  }
}

module.exports = HelloMessage;
