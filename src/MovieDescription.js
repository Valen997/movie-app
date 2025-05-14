import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "./Movies";

const MovieDescription = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{movie.title}</h2>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;
