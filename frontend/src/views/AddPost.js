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
  const [duration, setDuration] = useState("endOfDay");

  const resetInputs = () => {
    setTitle("");
    setDescription("");
    setDuration("endOfDay")
  }
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

                  <Button variant="light">
                    <span className="title">Upload a photo</span>
                  </Button>
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
                        <p style={{ fontSize: "25px" }}> Snack Name: </p>
                        <Input
                          placeholder="Peanut Butter Cups"
                          type="text"
                          value={title}
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
                        <p style={{ fontSize: "25px" }}> Description: </p>
                        <Input
                          cols="50"
                          placeholder="I brought them but I'm not hungry anymore."
                          rows="2"
                          type="textarea"
                          value={description}
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
                        <p style={{ fontSize: "25px" }}> Expiration Time: </p>
                        <FormGroup>
                          <Label for="exampleSelect">Select</Label>
                          <Input
                            id="exampleSelect"
                            type="select"
                            value={duration}
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

                    const headers = {
                      "Content-Type": "application/json",
                      Accept: "application/json",
                      "x-access-token":
                        localStorage.getItem("snackOverflowJwt") ?? "",
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
       
                    const response = await fetch(`${SERVER_URL}/posts/create`, {
                      method: "POST",
                      headers: headers,
                      mode: "cors",
                      body: JSON.stringify(body),
                    });
                    if (response.status < 300) {
                      resetInputs();
                      window.location.assign("/sap/home");
                    } else {
                      const data = await response.json();
                      console.log(data);
                    }
                  }}
                  href="/SAP/home"
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
