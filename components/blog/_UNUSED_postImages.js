var React = require('react');

var PostImages = React.creatClass({
  render: function(){
    console.log("HHELLOOOOOOOOO from postimages");

    var url = this.props.image;
    return(
      <img src=`{ url }` />
    )
  }
});
