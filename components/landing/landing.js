var React = require('react');
var Link = require('react-router').Link;
import ReactStormpath, { Authenticated, NotAuthenticated, LoginLink, LogoutLink, LogoutRoute } from 'react-stormpath';


var Landing = React.createClass({
  render: function(){
    return (
      <div>
      	<div className="column-center">IMG1</div>
        <div className="column-left">IMG2</div>
        <div className="column-right">IMG3</div>
      </div>
    );
  }
});

module.exports = Landing;
