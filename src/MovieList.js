import React from "react";
import movies from "./Movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
