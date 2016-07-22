var React = require('react');

var IndividualBlogPost = React.createClass({
  render: function(){
    var image1 = '#';
    if (this.props.images[0]){
      image1 = this.props.images[0];
    }


    return(
      <div className="blog-post-container">
        <div className="blog-img-container">
          <img className="blog-img" src={ image1 } />
        </div>
        <div className="blog-post-content">
          <h2>{ this.props.title }</h2>
          <p>{ this.props.article }</p>
          <p>Posted by { this.props.postedBy } on { this.props.datePosted.split("T")[0] }</p>
        </div>
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
