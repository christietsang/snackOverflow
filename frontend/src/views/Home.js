import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartExample2,
} from "../variables/charts.js";

function Home() {
  const SERVER_URL = "http://localhost:3500/api";
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        < Button
          className="btn-fill"
          color="primary"
          type="submit"
          onClick={async (e) => {

            const accessToken =
                      localStorage.getItem("snackOverflowJwt");
                      const headers = {
                        'Content-Type': "application/json",
                        'Accept':'application/json',
                        "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzg4NjU5ODk1YmFjMTVkNzI1YmM3NCIsIm5pY2tuYW1lIjoiQm9zY28yIiwiZW1haWwiOiJib3NjbzJAdGVzdC5jb20iLCJpYXQiOjE2NjQ2Nzg4NDksImV4cCI6MTY2NDc2NTI0OX0.Wu0xwaUKLxoRVPcwVOzKhF7RpAfDiZ89C3eAPh6_LTA",
                      };

          const response = await fetch(`${SERVER_URL}/posts/byCurrentUser`, {
            method: "GET",
            headers: headers,
          });

          const data = await response.json();
          console.log(data);

          }
        }
        ></Button>
      <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Total Shipments</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-info" /> 763,215
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg="4">
            <Card className="card-chart">
              <CardBody>
                <div className="chart-area" >
                  <h1 className="text-center"> asdasfasf</h1>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
