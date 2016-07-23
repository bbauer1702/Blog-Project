var React = require('react');
var Link = require('react-router').Link;



var Landing = React.createClass({
  getInitialState: function() {
    return{
      blogs: []
    }
  },

  getBlogs: function(){
    var self = this;
    // Grab blogs from server so we can display the most recent
    $.ajax({
      method: 'GET',
      url: '/blog'
    }).done(function(data){
      self.setState({ blogs: data })
    })
  },

  componentDidMount: function(){
    this.getBlogs();
  },

  recentPost: function() {
    console.log('recentpost', this.state.blogs);
    var image = this.state.blogs[0] ? this.state.blogs[0].images[0] : '#';
    console.log('phase2');
    return this.state.blogs[0] ? <div className="blog-post-container">
                                  <div className="blog-img-container">
                                    <img src={ image } />
                                  </div>
                                  <div className="blog-post-content">
                                    <h2>{ this.state.blogs[0].title }</h2>
                                    <p>{ this.state.blogs[0].article }</p>
                                    <p>Posted by { this.state.blogs[0].postedBy } on { this.state.blogs[0].datePosted.split("T")[0] }</p>
                                  </div>
                                </div>
                                : null;
  },

  render: function(){
    return (
      <div>
        <div className="intro">
          <div className="profile-image-container">
            <img src="http://bbauer.io/images/profile.jpg" />
          </div>
          <div className="profile-content-container">
            <h2>Hello, I'm Brian Bauer!</h2>
            <br/>
            <p>Welcome to my blog. Read the latest post below or check out <Link to='blog'>the Blogs section</Link> for more.</p>
            <br/>
            <p>Send me an <a href="mailto:brian.bauer@inventati.org"> e-mail</a> you have something that you would like to discuss!</p>
          </div>
        </div>

        { this.recentPost() }

      </div>
    );
  }
});

module.exports = Landing;
