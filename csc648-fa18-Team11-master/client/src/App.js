import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styling/about.css";
import "./styling/navbar.css";
import "./styling/errorpage.css";
import "./styling/homepage.css";
import "./styling/details.css";

import "./styling/register.css";
import "./styling/login.css";

import "./styling/dashboard.css";

import GENavBar from "./pages/components/navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import UserDashboard from "./pages/UserDashboard";
import PostDetails from "./pages/PostDetails";
import SearchResults from "./pages/components/search-results";
import SellForm from "./pages/components/sell-form";
import Login from "./pages/components/login";
import Register from "./pages/components/register";
import Messages from "./pages/components/message";

import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      admin: false
    };
    this.updateUser = this.updateUser.bind(this);
    this.checkUserLogin = this.checkUserLogin.bind(this);
  }
  componentDidMount() {
    this.checkUserLogin();
  }

  updateUser(obj) {
    this.setState(obj);
  }

  checkUserLogin() {
    axios.get("/auth/user").then(response => {
      if (response.data.user) {
        console.log("User exists");
        console.log(response.data);
        this.setState({
          loggedIn: true,
          admin: response.data.admin
        });
      } else {
        console.log("No user found");
        this.setState({
          loggedIn: false
        });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <p>
            SFSU-Fulda Software Engineering Project CSC648-848, Fall 2018. For
            Demonstration Only - Team 11
          </p>
          <GENavBar
            updateUser={this.updateUser}
            loggedIn={this.state.loggedIn}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/PostDetails" component={PostDetails} />
            <Route path="/searchresults" component={SearchResults} />
            <Route path="/Sell" component={SellForm} />
            <Route
              path="/Login"
              render={props => (
                <Login {...props} updateUser={this.updateUser} />
              )}
            />
            <Route path="/Register" component={Register} />
            <Route
              path="/UserDashboard"
              render={props => (
                <UserDashboard {...props} admin={this.state.admin} />
              )}
            />
            <Route
              path="/Messages"
              render={props => (
                <Messages {...props} loggedIn={this.state.loggedIn} />
              )}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//Dashboards needs to load messages
//Dashboards needs to load posts
//Dashboard needs to load admin post approvals
