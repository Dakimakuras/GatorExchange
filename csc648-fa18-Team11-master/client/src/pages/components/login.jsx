/**
 * Login component that allows for users to log in.
 */

import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirectTo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/auth/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        if (response.status === 200) {
          //TODO update login to be global
          this.props.updateUser({
            loggedIn: true
          })
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("Login error", error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="my-login-page">
          <section className="h-100">
            <div className="container h-100">
              <div className="row justify-content-md-center h-100">
                <div className="card-wrapper">
                  <div className="card fat">
                    <div className="card-body">
                      <h4 className="card-title">Login</h4>
                      {/* Requires validation still needs to be done */}
                      <form
                        onSubmit={this.handleSubmit}
                        className="my-login-validation"
                        noValidate=""
                      >
                        <div className="form-group">
                          <label htmlFor="email">Username</label>
                          <input
                            id="username"
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.handleChange}
                            required
                            autoFocus
                          />
                          <div className="invalid-feedback">
                            Username is Invalid
                          </div>
                        </div>
                        {/* Requires forget password still needs to be  */}
                        <div className="form-group">
                          <label htmlFor="password">
                            Password
                            {/**<a href="forgot.html" className="float-right">
                            Forgot Password?
                          </a> */}
                          </label>
                          <input
                            id="password"
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                            required
                            data-eye
                          />
                          <div className="invalid-feedback">
                            Password is required
                          </div>
                        </div>

                        <div className="form-group m-0">
                          <button type="submit" className="btn btn-block">
                            Login
                          </button>
                        </div>
                        <div className="d-block text-center mt-8 medium">
                          {" "}
                          Need an Account?
                          <Link
                            to={{
                              pathname: "/Register"
                            }}
                          >
                            {" "}
                            Register
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }
}

export default Login;
