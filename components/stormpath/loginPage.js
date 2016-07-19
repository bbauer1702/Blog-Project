var React = require('react');
import ReactStormpath, { LoginForm } from 'react-stormpath';

var LoginPage = React.createClass({
  render: function(){
    return(
      <div className="login-form">
        <LoginForm redirectTo='/admin' >
          <div className='login'>
            <h1>Login</h1>
            <br/>
            <p>
              <label htmlFor="username">Username or Email</label><br />
              <input id="username" type="text" name="username" />
            </p>
            <p>
              <label htmlFor="password">Password</label><br />
              <input id="password" type="password" name="password" />
            </p>
            <p spIf="form.error">
              <strong>Error:</strong><br />
              <span spBind="form.errorMessage" />
            </p>
            <p>
              <input type="submit" value="Login" />
            </p>
          </div>
        </LoginForm>
      </div>
    )
  }
});

module.exports = LoginPage;
