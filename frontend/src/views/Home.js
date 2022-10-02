import React, { useEffect, useState } from "react";

// reactstrap components
import { Row, Col } from "reactstrap";
import SnackPostCard from "../views/SnackPostCard";

function Home() {
  const SERVER_URL = "/api";
  
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
    data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    setSnackPosts(data);
  };
  let [count] = useState(0)

  useEffect(() => {
    getSnackPosts();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          {snackPosts.map((post, index) => (
            (count = count+1),
            (post.imageID = count),
            <Col lg="4" key={index}>
              <SnackPostCard {...post}/>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Home;
