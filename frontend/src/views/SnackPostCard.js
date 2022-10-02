import React from "react";
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

  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src={require("../assets/img/snax.png")}
          style={{
            height: 200,
            opacity: 0.1,
          }}
          width="100%"
        />
        <CardImgOverlay className="snackPost">
          <CardTitle className="snackPost-title" tag="h2">
            {title}
          </CardTitle>
          <CardText class="text-monospace">{description}</CardText>
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
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SnackPostCard;
