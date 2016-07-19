var React = require('react');

var IndividualBlogPost = React.createClass({
  render: function(){

    return(
      <div className="blog-post-container">
        <h2>{ this.props.title }</h2>
        <p>{ this.props.article }</p>
        <p>Posted by { this.props.postedBy } on { this.props.datePosted.split("T")[0] }</p>
      </div>
    )
  }
})

module.exports = IndividualBlogPost;


// This code will access and loop through the images in an array

// var PostImages = require('./postImages');

// var images = this.props.blogs.images.map(function(item){
//   return <PostImages image={ item }/>
// })

// { images }
