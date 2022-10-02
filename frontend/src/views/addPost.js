import React from "react";

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
  Col
} from "reactstrap";

function addPost() {
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
                    src={require("../assets/img/emilyz.jpg")}
                  />
                  <h5 className="title">Upload a photo</h5>
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
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                    <FormGroup tag="fieldset">
                      <legend>Expiration Time:</legend>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          Default (End of the day)
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          30 minutes
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          1 hour
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" />
                          2 hours
                        </Label>
                      </FormGroup>
                    </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
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

export default addPost;
