var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Blog = require('./../blog/blog.js');
var About = require('./../about/about.js');
var HomeBar = require('./../homeBar/homeBar.js');
var Admin = require('./../admin/admin.js');
var Portfolio = require('./../portfolio/portfolio.js');
var Landing = require('./../landing/landing.js')

// HomeBar will load by default (just planning a nav bar at top of screen) then the IndexRoute will load inside of that.
ReactDOM.render(
  (<Router history={ hashHistory }>
    <Route path='/' component={ HomeBar }>
      <IndexRoute component={ Landing }/>
      <Route path='/blog' component={ Blog }/>
      <Route path='/about' component={ About }/>
      <Route path='/portfolio' component={ Portfolio }/>
      <Route path='/admin' component={ Admin }/>
    </Route>
  </Router>),
  document.getElementById('app')
);
