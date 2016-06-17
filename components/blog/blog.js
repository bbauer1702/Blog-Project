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
  console.log("hellogetblogs");
  $.ajax({
    method: 'GET',
    url: '/blog'
  }).done(function(data){
    console.log(data);
    self.setState({ blogs: data })
  })
  },

  // Fetch data in componentDidMount. When the response arrives, store the data in state, triggering a render to update your UI.
  componentDidMount: function(){
    this.getAllBlogsFromServer();
  },

  render: function(){
    console.log("HELLO!" + this.blogs);
    return (
      <div>
        <BlogPostMapper blogs={ this.blogs } />


        <div className="blog-post-container">
          <h1>This is the blog post</h1>
  				<p>Ter ner le herpderpsmer mer derpsum merpus berps herderder serp. Herpem terpus herderder ter derpsum berp. Sherpus perp mer herp me ler herderder derps tee. Herderder berps herpsum herpler terp dee. Ner berps sherp herderder! Berps perper, ner merp terp nerpy. Nerpy perper merp me mer berp le ner? Derpler berps merpus, derperker sherp terp herderder tee. Ler herpy, me herderder herpem. Me mer derpus perp. Der derpler derps herpler ter terp herpem. Herpler herpem serp derp herpderpsmer herp ner perper mer. Nerpy ter derp perp derps der ner. Derpsum der herp herpy ler ner. Sherlamer dee ter derpy herp ner der. Sherper pee herpsum dee perper merp sherpus le perp der? Herp der terp perp derp merp tee.</p>
          </div>
          <div className="blog-post-container">
          <h1>This is the blog post</h1>
  				<p>Ter ner le herpderpsmer mer derpsum merpus berps herderder serp. Herpem terpus herderder ter derpsum berp. Sherpus perp mer herp me ler herderder derps tee. Herderder berps herpsum herpler terp dee. Ner berps sherp herderder! Berps perper, ner merp terp nerpy. Nerpy perper merp me mer berp le ner? Derpler berps merpus, derperker sherp terp herderder tee. Ler herpy, me herderder herpem. Me mer derpus perp. Der derpler derps herpler ter terp herpem. Herpler herpem serp derp herpderpsmer herp ner perper mer. Nerpy ter derp perp derps der ner. Derpsum der herp herpy ler ner. Sherlamer dee ter derpy herp ner der. Sherper pee herpsum dee perper merp sherpus le perp der? Herp der terp perp derp merp tee.</p>
        </div>
      </div>
    )
  }
});
// Will need to make this section return most recent posts(will settle for all to start)

module.exports = Blog;
