import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardImgOverlay,
} from "reactstrap";

const SnackPostCard = (props) => {
  const title = props.title;
  const description = props.description;
  const postImages = props.postImages;

  return (
    <div>
      <Card inverse>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/270?grayscale"
          style={{
            height: 200,
            opacity: 0.5,
          }}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h2">{title}</CardTitle>
          <CardText class="text-monospace">{description}</CardText>
          <Button
            color="primary"
            onClick={() => {
              window.location.assign(`/sap/view-post/${props._id}`);
            }}
          >
            Details...
          </Button>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default SnackPostCard;
