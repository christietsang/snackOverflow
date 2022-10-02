
import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

const SnackPostCard = (props) => {
  const title = props.title;
  const description = props.description
  const postImages = props.postImages;

  return (
    <div>
    <Card
      body
      className="text-center"
      style={{
        width: "18rem",
      }}
    >
      <CardTitle tag="h5">Special Title Treatment</CardTitle>
      <CardText>
        With supporting text below as a natural lead-in to additional content.
      </CardText>
      <Button color="primary">Go somewhere</Button>
    </Card>
    </div>
  );
};

export default SnackPostCard;
