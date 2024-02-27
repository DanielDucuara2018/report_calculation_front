import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from "./Api";
import './Login.css';

function loginUser(credentials) {
  return {token: 12345}
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const username = this.state.username
    const password = this.state.password
    console.log(username)
    console.log(password)
    const token = loginUser({
      username,
      password
    });
    console.log(token)
    this.props.setToken(token)
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