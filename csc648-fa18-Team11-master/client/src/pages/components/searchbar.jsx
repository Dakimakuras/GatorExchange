import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      value: "All",
      items: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  search() {
    fetch(`/allItems`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value: this.state.value,
        query: this.state.query
      })
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ items: json });
        //console.log(this.state.items);
      });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    let items = this.state.items;
    return (
      <div className="Search">
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <select value={this.state.value} onChange={this.handleChange}>
                <option defaultValue>All</option>
                <option value="Books">Books</option>
                <option value="Car">Car</option>
                <option value="Clothes">Clothes</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Supplies">Supplies</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search for your item!"
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <div className="input-group-append">
              <span
                className="input-group-text"
                onClick={() => {
                  this.search();
                }}
              >
                Search
              </span>
            </div>
          </div>
        </div>

        {this.state.items !== null ? (
          <Redirect
            to={{
              pathname: "/searchresults",
              state: { items }
            }}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default SearchBar;

