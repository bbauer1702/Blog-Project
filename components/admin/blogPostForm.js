var React = require('react');

var BlogPostForm = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Post Blog Article</h1>
        <form onSubmit={ this.props.handleBlogSubmit }>
          <div className="form-group">
            <label>Title</label>
            <input type="text" placeholder="Title of Post" ref="title" />
          </div>
          <div className="form-group">
            <label>Article</label>
            <textarea placeholder="Paste (or compose - do you feel lucky?) article here" rows="20" columns="60" ref="article" />
          </div>
          <div className="form-group">
            <label>URL to image 1</label>
            <input type="text" placeholder="Enter full URL here" ref="img0" />
          </div>
          <div className="form-group">
            <label>URL to image 2</label>
            <input type="text" placeholder="Enter full URL here" ref="img1"/>
          </div>
          <div className="form-group">
            <label>URL to image 3</label>
            <input type="text" placeholder="Enter full URL here" ref="img2"/>
          </div>
          <div className="form-group">
            <label>Publish now?</label>
            <input type="checkbox" ref="isPublished" />
          </div>
          <button type="submit" className="btn btn-primary">Post Blog Entry</button>
        </form>
      </div>
    );
  }
});

module.exports = BlogPostForm;
