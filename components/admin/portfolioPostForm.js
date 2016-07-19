var React = require('react');

var PortfolioPostForm = React.createClass({
  render: function(){
    return(
      <div className="portfolio-post-form">
        <h1>Post New Accomplishment to Portfolio</h1>
          <form>
            <div className="form-group">
              <label>Title</label>
              <input type="text" placeholder="Title of Post" />
            </div>
            <div className="form-group">
              <label>Client</label>
              <input type="text" placeholder="Made for:" />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input placeholder="Project Description" rows="40" columns="60" />
            </div>
            <div className="form-group">
              <label>Link to Project</label>
              <input type="text" placeholder="URL to project" />
            </div>
            <div className="form-group">
              <label>Image 1</label>
              <input type="file" placeholder="Upload file here" />
            </div>
            <div className="form-group">
              <label>Publish now?</label>
              <input type="checkbox" />
            </div>
              <input type="submit" value="Post to Portfolio" />
          </form>
      </div>
    );
  }
});

module.exports = PortfolioPostForm;

{/*<div className="form-group">
  <label>URL to image 1</label>
  <input type="text" placeholder="Enter full URL here" />
</div>
<div className="form-group">
  <label>URL to image 2</label>
  <input type="text" placeholder="Enter full URL here" />
</div>
<div className="form-group">
  <label>URL to image 3</label>
  <input type="text" placeholder="Enter full URL here" />
</div>*/}
