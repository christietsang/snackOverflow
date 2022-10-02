import React, { useState, useEffect } from "react";

// reactstrap components
import { Card, CardBody, CardText, Row, Col } from "reactstrap";

function UserProfile() {
  const SERVER_URL = "/api";
  const [userInfo, setUserInfo] = useState();
  const getUserInfo = async () => {
    const response = await fetch(`${SERVER_URL}/getUserInfo`, {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("snackOverflowJwt") ?? "",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setUserInfo(data);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      {userInfo && (
        <div className="content">
          <Row>
            <Col>
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("../assets/img/snax.png")}
                      />
                      <h5 className="title">
                        {userInfo.nickname}
                      </h5>
                    </a>
                    <p className="description">{userInfo.email}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}

export default UserProfile;
