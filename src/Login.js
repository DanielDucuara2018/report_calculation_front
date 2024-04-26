import React, { Component } from 'react';
// import { withCookies, Cookies } from 'react-cookie'
import PropTypes from 'prop-types';
import Api from "./Api";
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    Api.post("users/token", {
      username: this.state.username,
      password: this.state.password,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(res => {
      console.log(res)
      const acces_token = res.data.access_token;
      this.props.setToken(acces_token);
      localStorage.setItem('token', acces_token)
    })
    .catch(error => console.log(error));
  }

  render() {
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => this.setState({username: e.target.value})} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => this.setState({password: e.target.value})} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};