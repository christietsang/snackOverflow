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
  const imageID = props.imageID

  return (
    <div style={{height: "100%"}}>
      <Card inverse style={{padding: "0.8rem"}}>
        <CardImg
          alt="Card image cap"
          src={require(`../assets/img/snacks/${imageID}.png`)}
          style={{
            width: "100%",
            marginBottom: "8px"
          }}
          width="100%"
        />
        {/* <CardImgOverlay className="snackPost"> */}
          <CardTitle className="snackPost-title" tag="h2">
            {title}
          </CardTitle>
          <CardText className ="text-monospace">{description}</CardText>
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
        {/* </CardImgOverlay> */}
      </Card>
    </div>
  );
};

export default SnackPostCard;
