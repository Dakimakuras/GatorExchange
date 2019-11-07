import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

/**
 * This is the register component. It handles submitting the register form to the backend Updated riza's work
 * adding state and change/submission handlers.
 *
 * TODO: Add redirect route back to homepage
 */

class Register extends Component {
  //All required variables to pass back to the back end.
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      sfsuId: "",
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

  //Backend submission on password verification.
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword && this.state.username) {
      axios
        .post("/auth/user/signup/", {
          username: this.state.username,
          password: this.state.password,
          email: this.state.email,
          sfsuId: this.state.sfsuId
        })
        .then(response => {
          console.log(response);
          if (!response.data.errmsg) {
            console.log("Sign up Sucess");
            this.setState({
              redirectTo:'/'
            })
          } else {
            console.log(response.data.errmsg);
          }
        });
    } else {
      alert("Missing fields or Passwords do not match");
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-5 mx-auto">
              <div className="card card-signin flex-row my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Register</h5>
                  {/* Form register */}
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <input
                        type="text"

                        id="inputUsername"
                        className="form-control"
                        placeholder="Username"
                        name="username"
                        onChange={this.handleChange}
                        required
                        autoFocus
                      />
                      <label htmlFor="inputUsername">Username</label>

                    </div>
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        name="email"
                        onChange={this.handleChange}
                        required
                      />
                      <label htmlFor="inputEmail">Email Address</label>
                    </div>
                    <div className="form-label-group">
                      <input
                        type="number"
                        id="inputID"
                        className="form-control"
                        placeholder="SFSU ID"
                        name="sfsuId"
                        onChange={this.handleChange}
                        required
                      />
                      <label htmlFor="inputID">SFSU ID</label>
                    </div>

                    <hr />

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                        required
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputConfirmPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={this.handleChange}
                        required
                      />
                      <label htmlFor="inputConfirmPassword">
                        Confirm password
                      </label>
                    </div>

                    <button
                      className="btn btn-lg btn-block text-uppercase"
                      onClick={this.handleSubmit}
                      type="submit"
                    >
                      Register
                    </button>
                    <Link
                      to={{
                        pathname: "/Login"
                      }}
                    >
                      {" "}
                      <div className="d-block text-center mt-8 medium">
                        Sign In{" "}
                      </div>
                    </Link>
                    <hr className="my-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Register;
