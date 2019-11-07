import React from "react";
import Post from "./components/posts";

export default class Home extends React.Component {
  state = {
    items: null
  };
  componentDidMount() {
    fetch(`/allItems`)
      .then(response => response.json())
      .then(json => {
        this.setState({ items: json });
      });
  }

  render() {
    let items = this.state.items;
    return (

      <div className="Welcome">
        <div className="Banner">
          <div>SFSU College Student?</div>
          <div>Buy and Sell with students around you!</div>
        </div>
        <br />

        <div className="Header">Recent Listings</div>

        <div className="Recent">
          {this.state.items !== null ? (
            <div>
              <Post list={items} />
              <script type="text/javascript" />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
