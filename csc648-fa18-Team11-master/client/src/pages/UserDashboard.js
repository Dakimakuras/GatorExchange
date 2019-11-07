import React from "react";
import axios from "axios";
import Pending from "./components/pendingPosts"
import MessageList from "./components/messageList";
import Post from "./components/posts";
export default class UserDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "messages",
      messages: [],
      postings: [],
      pendingPostings: []
    };
    this.switcher = this.switcher.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.getPostings = this.getPostings.bind(this);
    this.getAdminPostings = this.getAdminPostings.bind(this);
  }

  getPostings() {
    fetch("/api/userPosts")
      .then(response => response.json())
      .then(json => {
        this.setState({ postings: json })
      })
  }

  getAdminPostings() {
    fetch("/api/adminPosts")
      .then(response => response.json())
      .then(json => {
        this.setState({ pendingPostings: json })
      })
  }

  getMessages() {
    axios
      .get("/messages/allMessages/")
      .then(response => {
        if (response) {
          this.setState({
            messages: response.data
          });
        } else {
          console.log("No data found");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  messageClick = () => {
    this.setState({ selected: "messages" });
  };

  postClick = () => {
    this.setState({ selected: "postings" });
  };

  pendClick = () => {
    this.setState({ selected: "pending" });
  };

  componentDidMount() {
    this.getPostings();
    this.getMessages();
    this.getAdminPostings();
  }

  switcher(param) {
    switch (param) {
      case "messages": return (<MessageList messages={this.state.messages} />);
      case "pending": return ( <Pending pendingPostings={this.state.pendingPostings} />)
      case "postings": return (<Post list={this.state.postings} />);
      default: return <div />
    }
  }

  render() {
    const admin = this.props.admin;
    return (
      <div className="form-group container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-10 d-flex justify-content-center align-items-end">
            </div>
          </div>
        </div>

        <div className="dash-menu">
          <div
            className="btn-group-horizontal"
            role="group"
            aria-label="Dashboard Buttons"
          >
            <div className="dash-title">My Dashboard</div>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.messageClick}
            >
              Messages
                  </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.postClick}
            >
              My Postings
                  </button>
            {admin === true ? (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.pendClick}
              >
                Pending Posts
                    </button>
            ) : (
                <div />
              )}
          </div>
        </div>
        <div className = "container-fluid">
            <div>
              <div className="col d-flex justify-content-left">
                <div>
                  {this.switcher(this.state.selected)}
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

        // div, className = "dashboardDisplay" is a state that can be changed
        // temporary info, to be changed by back end to reflect results
