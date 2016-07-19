var React = require('react');
var BlogPostMapper = require('./BlogPostMapper.js');

var Blog = React.createClass({
  getInitialState: function() {
    return{
      blogs: []
    }
  },

  getAllBlogsFromServer: function(){
  var self = this; // refer to self instead of this to prevent scope problems
  $.ajax({
    method: 'GET',
    url: '/blog'
  }).done(function(data){
    self.setState({ blogs: data })
  })
  },

  // Fetch data in componentDidMount. When the response arrives, store the data in state, triggering a render to update your UI.
  componentDidMount: function(){
    this.getAllBlogsFromServer();
  },

  render: function(){
    return (
      <div>
        <BlogPostMapper blogs={ this.state.blogs } />
      
      </div>
    )
  }
});
// Will need to make this section return most recent posts(will settle for all to start)

module.exports = Blog;
