import React, { Component } from "react";
import { connect } from "react-redux";
import { setToken } from "./actions/appActions";
import Api from "./Api";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: null,
      isloggingin: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isloggingin: true });
    Api.post(
      "users/token",
      {
        username: this.state.username,
        password: this.state.password,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => {
        console.log(res);
        const acces_token = res.data.access_token;
        this.props.setToken(acces_token);
        this.setState({ isloggingin: false });
      })
      .catch((error) => {
        this.setState({
          error: "Invalid username or password",
          isloggingin: false,
        });
      });
  }

  render() {
    const { error, isloggingin } = this.state;
    console.log(isloggingin);
    return (
      <div className="login-wrapper">
        <div className="login-form">
          <h1>Welcome to report calculation</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Username</p>
              <input
                type="text"
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </label>
            <div>
              <button type="submit" disabled={isloggingin}>
                sign in
              </button>
            </div>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.appRootReducer.token,
});

const mapDispatchToProps = {
  setToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
