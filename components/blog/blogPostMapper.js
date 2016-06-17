var React = ('react');
var IndividualBlogPost = require('./individualBlogPost');

function BlogPostMapper (props) {
  var blogs = this.props.blogs.map(function(item){
    return <IndividualBlogPost title={ item.title }
                         article={ item.article }
                         datePosted={ item.datePosted }
                         isPublished={ item.isPublished } />
  })
  return (
    <div>
      { blogs }
    </div>
  )
};


module.exports = BlogPostMapper;
