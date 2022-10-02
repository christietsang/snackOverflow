import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";

const SERVER_URL = "http://localhost:3500/api";

function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

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

                  <h2 className="title">Upload a photo</h2>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <CardHeader>
                <h2 className="title">Share your snack!</h2>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col md="5">
                      <FormGroup>
                        <legend> Snack Name: </legend>
                        <Input
                          placeholder="Peanut Butter Cups"
                          type="text"
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="5">
                      <FormGroup>
                        <legend> Description: </legend>
                        <Input
                          cols="50"
                          placeholder="I brought them but I'm not hungry anymore."
                          rows="2"
                          type="textarea"
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup tag="fieldset">
                        <legend>Expiration Time:</legend>
                        <FormGroup>
                          <Label for="exampleSelect">Select</Label>
                          <Input
                            id="exampleSelect"
                            type="select"
                            onChange={(e) => {
                              setDuration(e.target.value);
                            }}
                          >
                            <option value="endOfDay">
                              Default: (End of the day)
                            </option>
                            <option value="30">30 minutes</option>
                            <option value="60">1 hour</option>
                            <option value="120">2 hours</option>
                          </Input>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  className="btn-fill"
                  color="primary"
                  type="submit"
                  onClick={async (e) => {
                    const addMinutes = (date, minutes) => {
                      return new Date(date.getTime() + minutes * 60000);
                    };
                    const accessToken =
                      localStorage.getItem("snackOverflowJwt");
                      const headers = {
                        'Content-Type': "application/json",
                        'Accept':'application/json',
                        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzg4NjU5ODk1YmFjMTVkNzI1YmM3NCIsIm5pY2tuYW1lIjoiQm9zY28yIiwiZW1haWwiOiJib3NjbzJAdGVzdC5jb20iLCJpYXQiOjE2NjQ2Nzg4NDksImV4cCI6MTY2NDc2NTI0OX0.Wu0xwaUKLxoRVPcwVOzKhF7RpAfDiZ89C3eAPh6_LTA",
                      };
                    let closingTime;
                    if (duration === "endOfDay") {
                      closingTime = new Date().setUTCHours(23, 59, 59, 999);
                    } else {
                      const minutes = Number(duration);
                      closingTime = addMinutes(new Date(), minutes);
                    }

                    const body = {
                      title,
                      description,
                      closingTime,
                    };
                    console.log(body);
                    const response = await fetch(`${SERVER_URL}/posts/create`, {
                      method: "POST",
                      headers: headers,
                      mode: 'cors',
                      body: JSON.stringify(body),
                    });
                    const data = await response.json();
                    console.log(data);
                  }}
                >
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AddPost;
