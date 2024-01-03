import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Link, useNavigate } from "react-router-dom";
import './Comment.css';

const Sharmapgreview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const name = localStorage.getItem("name");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function handleReview(e) {
    e.preventDefault();
    getFetchData();
    if (rating != 0) {
      if (review && rating && name) {
        const data = await axios.post("/sharmapgreview", {
          comment: review,
          rating: rating,
          name: name,
        });
      } else {
        alert("Please enter your comment");
      }
    } else {
      alert("Please rate the pg");
    }
    getFetchData();
    console.log(review + "   " + rating + "  " + name);
  }
  const getFetchData = async () => {
    const data = await axios.get("/sharma");
    console.log(data.data.data);
    if (data.data.success) {
      setData(data.data.data);
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div className="review-container">
      <h2> Comment </h2>
      <input
        className="comment-input"
        type="text"
        placeholder="enter your review here"
        onChange={(e) => setReview(e.target.value)}
      />
      <button className="share-button" onClick={handleReview}>
        Share
      </button>
      <ReactStars
        size={30}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <div className="comment-list">
        {data.map((e, i) => (
          <div key={i} className="comment-item">
            <p className="comment-author">{e.name}</p>
            <ReactStars
              size={15}
              half={true}
              value={e.rating}
              edit={false}
              className="comment-stars"
            />
            <p className="comment-text">{e.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sharmapgreview;
