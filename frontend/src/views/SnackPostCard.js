import React, { useEffect, useState } from "react";
import { Card, Button, CardImg, CardTitle, CardText } from "reactstrap";
import "../assets/css/snackPostCard.css";
import base64ArrayBuffer from "../util/bufferArrayToStringBase64";

const SnackPostCard = (props) => {
  const title = props.title;
  const description = props.description;
  const imageID = props.imageID;
  const [imageBase64, setImageBase64] = useState("");

  const convertImage = async () => {
    setImageBase64(await base64ArrayBuffer(props.images[0].data.data));
  };
  useEffect(() => {
    if (props.images.length > 0) {
      convertImage();
    }
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Card inverse style={{ padding: "0.8rem", height: "400px" }}>
        <div style={{ height: "200px", margin: "auto", marginBottom: "1rem" }}>
          <CardImg
            alt="Card image cap"
            src={
              imageBase64
                ? `data:image/png;base64,${imageBase64}`
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
