import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import {Redirect} from 'react-router-dom';
import axios from "axios";
class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      username: "",
      text: "",
      redirectTo: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const itemID = url.searchParams.get("itemId");
    axios.get(`/api/${itemID}`).then(response => {
      if(!response.data){
        console.log("No data found");
      } else {
        this.setState({
          username: response.data[0].username,
          subject: response.data[0].title
        })
      }
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick(event){
    event.preventDefault();
    if(this.props.loggedIn){
      axios.post("/messages/", {
        subject: this.state.subject,
        username: this.state.username,
        text: this.state.text,
      }).then(response =>{
        if(response.status === 200) {
          this.setState({
            redirectTo: "/"
          })
        }
      }).catch(error =>{
        console.log("Message error", error);
      })
    }
    else{
      alert("Please Log In!");
      this.setState({
        redirectTo: "/Login"
      })
    }
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
    return (
      <div>
        <div className="row justify-content-md-center h-100">
          <div className="card-wrapper w-50">
            <div className="card fat">
              <div className="card-body">
                <form onSubmit = {this.handleClick}>
                  <div className=" form-group container-fluid">
                    <div className="row justify-content-md-center">
                      <h4 className="card-title">Send Message to {this.state.username}</h4>
                    </div>
                    <div className="form-group row justify-content-md-center">
                      <label htmlFor="Item-Description">Subject </label>
                      <Input type="text" defaultValue = {this.state.subject} onChange = {this.handleChange} required/>
                    </div>
                    <div className="form-group row justify-content-md-center">
                      <textarea
                        className="form-control"
                        style = {{height: "200px"}}
                        name = "text"
                        placeholder="Message to Seller"
                        onChange = {this.handleChange}
                        required
                      />
                    </div>
                  </div>
                  <Button type = "primary" onClick = {this.handleClick}>Send</Button>
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

export default Messages;
