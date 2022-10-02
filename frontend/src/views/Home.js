import React, { useEffect } from "react";

// reactstrap components
import { Row, Col } from "reactstrap";
import SnackPostCard from "../components/SnackPostCard";

function Home() {
  const SERVER_URL = "http://localhost:3500/api";
  const [snackPosts, setSnackPosts] = React.useState([]);
  const getSnackPosts = async () => {
    const response = await fetch(`${SERVER_URL}/posts/availablePosts`, {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("snackOverflowJwt") ?? "",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setSnackPosts(data);
  };
  useEffect(() => {
    getSnackPosts();
  }, []);
  console.log(snackPosts);
  return (
    <>
      <div className="content">
        <Row>
          {snackPosts.map((post, index) => (
            <Col lg="4" key={index}>
              <SnackPostCard />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Home;
