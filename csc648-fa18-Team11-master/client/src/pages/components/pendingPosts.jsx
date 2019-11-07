import React, { Component } from "react";
import { Button, Row} from "reactstrap";
import Axios from "axios";

class Pending extends Component {
  constructor(props) {
    super(props);
    this.approve = this.approve.bind(this);
    this.disapprove = this.disapprove.bind(this);
  }

  approve(id) {
    Axios.put(`/api/approval/${id}`)
      .then(response => {
        if (response === 200) {
          console.log("Post approved");
        }
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({refresh: true});
  }

  disapprove(id) {
    Axios.delete(`/api/delete/${id}`)
      .then(response => {
        if (response === 200) {
          console.log("Post Deleted");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const pending = this.props.pendingPostings;

    return (
      <Row>
        {pending.length > 0 ? (
          pending.map((pending, k) => {
            return (
              <div key={k}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={pending.image}
                    alt="item"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pending.title}</h5>
                    <p className="card-text">$ {pending.price}</p>
                    <p className="card-text">{pending.description}</p>
                    <Button
                      color="primary"
                      href = "/UserDashboard"
                      onClick={() => this.approve(pending._id)}
                    >
                      Approve
                    </Button>
                    <Button
                      color="primary"
                      href = "/UserDashboard"
                      onClick={() => this.disapprove(pending._id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Pending Posts</div>
        )}
      </Row>
    );
  }
}

export default Pending;
