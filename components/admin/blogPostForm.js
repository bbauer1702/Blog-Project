var React = require('react');

var BlogPostForm = React.createClass({
  render: function(){
    return(
      <div className="blog-post-form">
        <h1>Post Blog Article</h1>
        <form onSubmit={ this.props.handleBlogSubmit }>
          <div className="form-group">
            <label>Title</label>
          <input type="text"  ref="title" placeholder="Post Title" onChange={ this.props.handleBlogTitleChange } value={ this.props.title } />
          </div>
          <div className="form-group">
            <label>Article</label>
          <textarea placeholder="Paste (or compose - do you feel lucky?) article here" rows="20" columns="60" ref="article"  onChange={ this.props.handleBlogArticleChange } value={ this.props.article }/>
          </div>
          <div className="form-group">
            <label>URL to image 1</label>
          <input type="text" ref="img0" placeholder="Paste full url here" onChange={ this.props.handleBlogImage0Change } value={ this.props.image0 }/>
          </div>
          <div className="form-group">
            <label>URL to image 2</label>
          <input type="text" ref="img1" placeholder="Paste full url here" onChange={ this.props.handleBlogImage1Change } value={ this.props.image1 }/>
          </div>
          <div className="form-group">
            <label>URL to image 3</label>
          <input type="text" ref="img2" placeholder="Paste full url here" onChange={ this.props.handleBlogImage2Change } value={ this.props.image2 }/>
          </div>
          <div className="form-group">
            <label>Publish now?</label>
          <input type="checkbox" ref="isPublished" onChange={ this.props.handleBlogPublishChange } value={ this.props.isPublished } />
          </div>
          <input type="submit" value="Post New Blog" />
        </form>
      </div>
    );
  }
});

module.exports = BlogPostForm;
