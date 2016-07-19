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

  handleImageUpload: function( ){
    console.log("hello from handleImageUpload")
  },


  handleBlogTitleChange: function(e){
    this.setState({ title: e.target.value })
  },
  handleBlogArticleChange: function(e){
    this.setState({ article: e.target.value })
  },
  handleBlogPublishChange: function(e){
    this.setState({ isPublished: e.target.value })
  },
  handleBlogImage0Change: function(e){
    this.setState({ image0: e.target.value })
  },
  handleBlogImage1Change: function(e){
    this.setState({ image1: e.target.value })
  },
  handleBlogImage2Change: function(e){
    this.setState({ image2: e.target.value })
  },



  handleBlogSubmit: function(e) {
    e.preventDefault();
    var blog = {};
    blog.title = this.state.title;
    blog.article = this.state.article;
    blog.isPublished = this.state.isPublished;
    blog.datePosted = new Date;
    blog.images = [];
    blog.images.push(this.state.image0, this.state.image1, this.state.image2);

    this.handleNewBlogPost(blog);
    this.setState({ title: '', article: '' }); // reset fields (empty)
  },


  handleNewBlogPost: function(newBlog) {
    console.log(newBlog)
    $.ajax({
      url: '/blog',
      method: 'POST',
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
        <BlogPostForm handleBlogSubmit={ this.handleBlogSubmit }
                      handleBlogTitleChange={ this.handleBlogTitleChange }
                      handleBlogArticleChange={ this.handleBlogArticleChange }
                      handleBlogPublishChange={ this.handleBlogPublishChange }
                      handleBlogImage0Change={ this.handleBlogImage0Change }
                      handleBlogImage1Change={ this.handleBlogImage1Change }
                      handleBlogImage2Change={ this.handleBlogImage2Change }
                      />
        <PortfolioPostForm />
      </div>
    );
  }
});

module.exports = Admin;
