var React = require('react');
var Link = require('react-router').Link;

var Landing = React.createClass({
  render: function(){
    return (
      <div>
      	<div className="landerimg1">IMG1</div>
        <div className="landerimg2">IMG2</div>
        <div className="landerimg3">IMG3</div>
        <div className="adminlogin">
          <Link to='admin'><h2>SUPERSECRETBACKDOORFORTHEADMIN</h2></Link>
        </div>
      </div>
    );
  }
});

module.exports = Landing;
