import React, { Component } from "react";
import Post from "./posts";

class SearchResults extends Component {
  render() {
    let items = this.props.location.state.items;
    return (
      <div>
        <Post list={items} />
      </div>
    );
  }
}

export default SearchResults;
