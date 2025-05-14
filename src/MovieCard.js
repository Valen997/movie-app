import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, posterURL, rating }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <img src={posterURL} alt={title} style={{ width: "200px" }} />
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
      <Link to={`/movies/${id}`}>See More</Link>
    </div>
  );
};

export default MovieCard;
