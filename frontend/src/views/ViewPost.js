import React, { useEffect, useState } from "react";
import "../assets/css/sidebar.css";
import { useLocation } from "react-router-dom";

// reactstrap components
import { Button, Card, CardBody, CardText, Row, Col } from "reactstrap";

const SERVER_URL = "http://localhost:3500/api";

function ViewPost() {
  const location = useLocation();
  const [comment, setComment] = useState("");
  const [postComments, setPostComments] = useState([]);
  const [postData, setPostData] = useState({});

  const onClickHandler = async () => {
    if (comment) {
      const pathTokens = location.pathname.split("/");
      const postId = pathTokens[pathTokens.length - 1];
      const response = await fetch(`${SERVER_URL}/comments/create/${postId}`, {
        method: "POST",
        headers: {
          "x-access-token": localStorage.getItem("snackOverflowJwt") ?? "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: comment,
        }),
      });
      if (response.status < 300) {
        const newComment = await response.json();
        setPostComments([...postComments, newComment]);
        setComment("");
      }
    }
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const getPostData = async () => {
    const pathTokens = location.pathname.split("/");
    const postId = pathTokens[pathTokens.length - 1];
    const response = await fetch(
      `${SERVER_URL}/posts/getSinglePost/${postId}`,
      {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("snackOverflowJwt") ?? "",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setPostData(data);
  };

  const getPostComments = async () => {
    const pathTokens = location.pathname.split("/");
    const postId = pathTokens[pathTokens.length - 1];
    const response = await fetch(
      `${SERVER_URL}/comments/commentsByPost/${postId}`,
      {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("snackOverflowJwt") ?? "",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setPostComments(data);
  };
  useEffect(() => {
    getPostData();
    getPostComments();
  }, []);

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
                  <h3 className="title">{postData.title ?? ""}</h3>
                  <h5 className="description">{postData.description ?? ""}</h5>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardBody className="main-container">
                {postComments.map((comment) => (
                  <div key={comment._id} className="comment-container">
                    {comment.message}
                  </div>
                ))}
                <CardText className="comment-flexbox" />
                <h2 className="comment-text">Comments</h2>
                <textarea
                  value={comment}
                  onChange={onChangeHandler}
                  className="input-box"
                  placeholder="Type your comments here"
                />
                <Button className="comment-button" onClick={onClickHandler}>
                  Submit
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
