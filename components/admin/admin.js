var React = require('react');
var BlogPostForm = require('./blogPostForm.js');
var PortfolioPostForm = require('./portfolioPostForm');

var Admin = React.createClass({
  render: function(){
    return(
      <div>
        <BlogPostForm />
        <PortfolioPostForm />
      </div>
    );
  }
});

module.exports = Admin;
