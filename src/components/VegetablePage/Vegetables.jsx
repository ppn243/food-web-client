import React from "react";
import Navbar from "../HomePage/Navbar";
import SubNavbar from "../HomePage/SubNavbar";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './vegetables.css'

const Vegetables = () => {
  const [posts, setPosts] = useState([]);

  const getPost = async () => {
    await axios
      .get("http://food-web-api-1.herokuapp.com/api/get-products-by-type/3")
      .then((resp) => {
        setPosts(resp.data);
      });
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Link to="/details" className="card__container">
        {posts.map((post, key) => (
          <div className="card" key={post.name}>
            <img src={post.image} alt="" />
            <div className="card_content">
              <Link href="#" className="card_link">
                <p className="card_text">{post.name}</p>
              </Link>
              <p className="card_text">
                <span className="money money_sale">{post.promotion_price}</span>{" "}
                <span className="money">{post.unit_price}</span>
              </p>
              <Link href="#" className="detail_link">
                <div className="detail">Chi Tiết</div>
              </Link>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default Vegetables;
