var React = require('react');
var Link = require('react-router').Link;
import ReactStormpath, { Authenticated, NotAuthenticated, LoginLink, LogoutLink, LogoutRoute } from 'react-stormpath';



var NavBar = React.createClass({
  render: function(){
    return(
      <div className="title-container">
        <h3 className="title">Brian Bauer</h3>
        <ul className="nav">
          <Link to='about'><li>About</li></Link>
          <Link to='portfolio'><li>Portfolio</li></Link>
          <Link to='blog'><li>Blog</li></Link>
        <NotAuthenticated>
          <li>
          <LoginLink>Login</LoginLink>
          </li>
          <li>
          <Link to='register'><p>Register</p></Link>
          </li>
        </NotAuthenticated>
        <Authenticated>
          <li>
          <Link to='admin'><p>Admin Portal</p></Link>
          </li>
          <li>
          <LogoutLink redirectTo='/' >Logout</LogoutLink>
          </li>
        </Authenticated>
        </ul>
      </div>
    )
  }
});

module.exports = NavBar;
