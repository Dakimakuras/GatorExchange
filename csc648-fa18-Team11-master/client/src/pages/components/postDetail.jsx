import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";

//Post Details when pressed on an item
//Displays photo on left side and details on the right with the option to contact the seller
class PostDetail extends Component {
  render() {
    const item = this.props.list;
    let itemId = "";
    return (
      <div>
        {item.map((item, k) => {
          itemId = item._id;
          return (
            <div className="UniqueName" key={k}>
              <Row>
                <Col sm="6">
                  <Card>
                    <CardImg
                      className="postPhoto"
                      src={item.image}
                      width="500"
                      height="500"
                      alt="Card image cap"
                    />
                  </Card>
                </Col>
                <Col sm="6">
                  <Card>
                    <CardBody>
                      <CardTitle>
                        <h2>${item.price}</h2>
                      </CardTitle>
                      <CardText>{item.title}</CardText>
                      <CardText>{item.description}</CardText>
                      <CardText>{item.category}</CardText>
                      <CardText>Sold by: {item.username}</CardText>
                      <Button
                        href={"/Messages?itemId=" + itemId}
                        color="primary"
                        onClick={this.toggle}
                      >
                        Contact Seller
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostDetail;
