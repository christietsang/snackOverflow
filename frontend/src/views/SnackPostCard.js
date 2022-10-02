import React from "react";
import { Card, Button, CardImg, CardTitle, CardText } from "reactstrap";
import "../assets/css/snackPostCard.css";

const SnackPostCard = (props) => {
  const title = props.title;
  const description = props.description;
  const imageID = props.imageID;
  let image;
  function _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
  if (props.images.length > 0) {
    image = props.images[0].data;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <Card inverse style={{ padding: "0.8rem", height: "400px" }}>
        <div style={{ height: "200px", margin: "auto", marginBottom: "1rem" }}>
          <CardImg
            alt="Card image cap"
            src={
              image
                ? `data:image/png;base64,${_arrayBufferToBase64(image.data)}`
                : require(`../assets/img/snacks/${imageID}.png`)
            }
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
