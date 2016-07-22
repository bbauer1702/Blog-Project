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
                                    <img className="blog-img" src={ image } />
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
            <p>I'm a junior web developer currently training at Montana Code School in Bozeman, MT.</p>
            <br/>
            <p>email: brian.bauer@inventati.org</p>
            <p>address: 9710 Quail Lane, Bozeman MT 59715</p>
            <br/>
            <p>I am currently looking for employment or internship opportunities. Please contact me if you have any suggestions!</p>
          </div>
        </div>
        { this.recentPost() }
      </div>
    );
  }
});

module.exports = Landing;
