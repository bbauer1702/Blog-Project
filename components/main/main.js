var React = require('react');
var NavBar = require('./../nav/navBar.js');
var Footer = require('./../nav/footer.js');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <NavBar />
          { this.props.children }
        <Footer />
      </div>
    )
  }
});

module.exports = Main;
