var React = require('react');
var Link = require('react-router').Link;



var Landing = React.createClass({
  render: function(){
    return (
      <div>
      	<div className="column-center"><Link to="portfolio">Placeholder</Link></div>
        <div className="column-left"><Link to="blog">Placeholder</Link></div>
        <div className="column-right"><Link to="about">Placeholder</Link></div>
      </div>
    );
  }
});

module.exports = Landing;
