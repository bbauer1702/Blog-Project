var React = require('react');
// var Link = require('react-router').Link;

var HomeBar = React.createClass({
  render: function(){
    return(
      <div>
        <div className="jumbotron">
          <h1 className="title">Hello from Brian's super kickass WideWorldWeb!</h1>
          <h2 className="wisdom">I've got a bad feeling about this...</h2>
          { this.props.children }
        </div>
      </div>
    )
  }
});

module.exports = HomeBar;

// IT DOESN'T LIKE THE LINKS!!!

{/*<link to='blog'>
  <button className="nav btn">Blog</button>
</link>
<link to='portfolio'>
  <button className="nav btn">Portfolio</button>
</link>
<link to='about'>
  <button className="nav btn">About</button>
</link>*/}