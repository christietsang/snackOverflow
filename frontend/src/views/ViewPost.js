import React, { useState } from "react";
import "../assets/css/sidebar.css"

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";


function ViewPost() {
  const [comment, setComment] = useState("");
  const [sentComments, setSentComments] = useState([])

  const onClickHandler = () => {
    setSentComments((sentComments) => [...sentComments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />

                  <img //PICTURE OF FOOD GOES HERE
                    alt="..."
                    className=""
                    src={require("../assets/img/snax.png")}
                  />
                  <h3 className="title">SNACK NAME goes here</h3> 
                  <h5 className="description">snack description</h5> 
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
            <CardBody className = "main-container">
              {sentComments.map((text) => (
                <div className="comment-container">{text}</div>
              ))}
              <CardText className = "comment-flexbox" />
                <h2 className="comment-text">Comments</h2> 
                <textarea 
                  value={comment}
                  onChange={onChangeHandler}
                  className="input-box"
                  placeholder="Type your comments here"
                />
                <Button 
                  className="comment-button"
                  onClick={onClickHandler}
                  >Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ViewPost;
