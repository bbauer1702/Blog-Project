var React = require('react');
var Link = require('react-router').Link;
import ReactStormpath, { Authenticated, NotAuthenticated, LoginLink, LogoutLink, LogoutRoute } from 'react-stormpath';



var HomeBar = React.createClass({
  render: function(){
    return(
          <div className="container-of-all">
            <div className="title-container">
              <h3 className="title">Brian Bauer</h3>
              <ul className="nav">
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

        { this.props.children }

      </div>
    )
  }
});

module.exports = HomeBar;

// IT DOESN'T LIKE THE LINKS!!!

{/*<link to='blog'>
  <button className="nav btn">Blog</button>
</link>
<link to='portfolio'>
  <button className="nav btn">Portfolio</button>
</link>
<link to='about'>
  <button className="nav btn">About</button>
</link>*/}
