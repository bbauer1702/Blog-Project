var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div className="about">
        <div className="profile-image-container">
          <img src="http://bbauer.io/images/bbauerheadshot.jpg" />
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
    )
  }
});

module.exports = About;
