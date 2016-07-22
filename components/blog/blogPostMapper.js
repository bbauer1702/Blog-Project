var React = require('react');
var IndividualBlogPost = require('./individualBlogPost');

function BlogPostMapper (props) {
  // Sort blogs, most recent on top
  var blogs = props.blogs.sort(function(a,b){
    var c = new Date(a.datePosted);
    var d = new Date(b.datePosted);
    return d-c;
  }).map(function(item){
    return <IndividualBlogPost title={ item.title }
                         article={ item.article }
                         datePosted={ item.datePosted }
                         isPublished={ item.isPublished }
                         postedBy={ item.postedBy }
                         key={ item._id }
                         images={ item.images }
                         blogs={ props.blogs }/>
  })
  return (
    <div>
      { blogs }
    </div>
  )
};


module.exports = BlogPostMapper;
