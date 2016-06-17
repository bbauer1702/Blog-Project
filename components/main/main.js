var React = require('react');
var NavBar = require('./../nav/navBar.js');

var Main = React.createClass({
  render: function(){
    return (
      <div>
      <NavBar />
      { this.props.children }
      </div>
    )
  }
});

module.exports = Main;
