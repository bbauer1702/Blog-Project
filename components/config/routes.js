var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
// var Router = ReactRouter.Router; // Replaced by ReactStormpath.Router
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
import ReactStormpath, { Router, AuthenticatedRoute, LoginRoute, LoginLink } from 'react-stormpath';

var Blog = require('./../blog/blog.js');
var About = require('./../about/about.js');
var HomeBar = require('./../homeBar/homeBar.js');
var Admin = require('./../admin/admin.js');
var Portfolio = require('./../portfolio/portfolio.js');
var Landing = require('./../landing/landing.js');
var LoginPage = require('./../stormpath/loginPage.js');
var RegistrationPage = require('./../stormpath/registrationPage');

// Run this before the render
ReactStormpath.init({
});

// HomeBar will load by default (just planning a nav bar at top of screen) then the IndexRoute will load inside of that.
ReactDOM.render(
  (<Router history={ hashHistory }>
    <Route path='/' component={ HomeBar }>
      <IndexRoute component={ Landing }/>
      <Route path='/blog' component={ Blog }/>
      <Route path='/about' component={ About }/>
      <Route path='/portfolio' component={ Portfolio }/>
      <AuthenticatedRoute path='/admin' component={ Admin }/>
      <Route path='/register' component={ RegistrationPage } />
    </Route>
    <LoginRoute path='/login' component={ LoginPage } />


  </Router>),
  document.getElementById('app')
);
