import React, { Component } from "react";
import { Button } from "reactstrap";

class Post extends Component {

  render() {
    const item = this.props.list;
    let itemId = "";
    return (
      <div>
        {item.map((item, k) => {
          itemId = item._id;
          return (
            <div className="Column" key={k}>
              <a href={"PostDetails?itemId=" + itemId} target="_blank" key={k}>

                <img 
                  className="postPhoto"
                  src={item.image}
                  width="200"
                  height="200"
                  alt="post"
                />
              </a>
                <h2>$ {item.price}</h2>
                <p>{item.title}</p>
              <div className="buyButton">

                <Button  href = {"/Messages?itemId=" + itemId} color="primary" onClick={this.toggle}>
                  Contact Seller
                </Button>

              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Post;
