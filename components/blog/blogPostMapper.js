var React = require('react');
var IndividualBlogPost = require('./individualBlogPost');

function BlogPostMapper (props) {
  console.log("Hello from BlogPostMapper");
  var blogs = props.blogs.map(function(item){
    return <IndividualBlogPost title={ item.title }
                         article={ item.article }
                         datePosted={ item.datePosted }
                         isPublished={ item.isPublished }
                         postedBy={ item.postedBy }
                         key={ item._id }
                         blogs={ props.blogs }/>
  })
  return (
    <div>
      { blogs }
    </div>
  )
};


module.exports = BlogPostMapper;
