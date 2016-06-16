var React = require('react');

var IndividualBlogPost = React.createClass({
  render: function(){
    return(
      <div className="blog-post-container">
        <h1>Post Title: { this.props.title }</h1>
        <p>Article: { this.props.article }</p>
        <p>Posted By: { this.props.postedBy }</p>
      </div>
    )
  }
})

module.exports = IndividualBlogPost;
