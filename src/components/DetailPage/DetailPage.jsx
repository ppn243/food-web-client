import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "../HomePage/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./detailpage.css";

const DetailPage = () => {
  const location = useLocation();
  console.log(useLocation);
  const path = location.pathname.split("/");
  const [posts, setPosts] = useState([{}]);

  useEffect(() => {
    const getPost = async () => {
      console.log(path[2]);
      const res = await axios.get(
        "http://food-web-api-1.herokuapp.com/api/get-products/" + path[2]
      );
      setPosts(res.data);
      console.log(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <div className="section-title">
            <h2>Detail Product</h2>
          </div>
        </Row>
        <Row>
          <Col>
            <img className="image" src={posts.image} alt="img"></img>
          </Col>
          <Col>
            <h1>{posts.name}</h1>
            <p className="card_text">
              <span className="money">{posts.unit_price}</span>
              <span className="money money_sale">{posts.promotion_price}</span>{" "}
            </p>
            <p className="text_content">{posts.description}</p>
            <Button className="btn1">Chi Tiết</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPage;
