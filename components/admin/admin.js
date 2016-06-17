var React = require('react');
var BlogPostForm = require('./blogPostForm.js');
var PortfolioPostForm = require('./portfolioPostForm');

var Admin = React.createClass({
  getInitialState(){
    return {
      postedBy: null,
      postedById: null,
      title: null,
      article: null,
      images: null,
      datePosted: null,
      postNumber: null,
      isPublished: null
    }
  },

  handleBlogSubmit: function(e) {
    e.preventDefault(); // Prevent page refresh on submit

    var post = {}; // absorbs the following input:
    post.title = this.state.title;
    // post.posterEmail = Figure this out later https://docs.stormpath.com/nodejs/express/latest/user_data.html#current-user-json-api
    post.article = this.state.article;
    post.datePosted = new Date;
    post.isPublished = this.state.isPublished;
    post.images[0] = this.state.img0;
    post.images[1] = this.state.img1;
    post.images[2] = this.state.img2;
    this.handleNewBlogPost(blog);
    console.log("hello from handleBlogSubmit");

    this.setState({ title: '', article: '' }) // reset fields (empty)
  },

  handleNewBlogPost: function(newBlog) {
    $.ajax({
      url: '/blog',
      method: '/POST',
      dataType: 'json',
      data: newBlog,
      success: function(data) {
        console.log("success!"); // this.props.toggleActiveComponenet("componentName");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/blog', status, err.toString())
      }.bind(this)
    })
  },

  render: function(){
    return(
      <div>
        <BlogPostForm handleBlogSubmit={ this.handleBlogSubmit } />
        <PortfolioPostForm />
      </div>
    );
  }
});

module.exports = Admin;
