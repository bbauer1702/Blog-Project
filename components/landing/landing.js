var React = require('react');
var Link = require('react-router').Link;



var Landing = React.createClass({
  render: function(){
    return (
      <div>
      	<div className="column-center"><Link to="portfolio">IMG1</Link></div>
        <div className="column-left"><Link to="blog">IMG2</Link></div>
        <div className="column-right"><Link to="about">IMG3</Link></div>
      </div>
    );
  }
});

module.exports = Landing;
