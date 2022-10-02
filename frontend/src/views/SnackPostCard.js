import React, { useState } from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardImgOverlay,
} from "reactstrap";
import "../assets/css/snackPostCard.css";

const SnackPostCard = (props) => {
  const title = props.title;
  const description = props.description;
  const imageID = props.imageID;

  return (
    <div style={{ textAlign: "center" }}>
      <Card inverse style={{ padding: "0.8rem", height: "400px" }}>
        <div style={{ height: "200px", margin: "auto", marginBottom: "1rem" }}>
          <CardImg
            alt="Card image cap"
            src={require(`../assets/img/snacks/${imageID}.png`)}
            style={{ height: "200px", margin: "auto", marginBottom: "1rem" }}
          />
        </div>
        <CardTitle className="snackPost-title" tag="h2">
          {title}
        </CardTitle>
        <CardText className="text-monospace">{description}</CardText>
        <div className="snackPost-button-container">
          <Button
            color="primary"
            onClick={() => {
              window.location.assign(`/SAP/view-post/${props._id}`);
            }}
          >
            Details...
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SnackPostCard;
