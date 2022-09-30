import React from "react";
import { movies } from "../data";

function Movies() {
  const movieFilm = movies.map(( movie ) => {
    return (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <h3>{movie.time}</h3>
      <h4>genres</h4>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  )});
  return (
    <>
      <h1>Movies Page</h1>
      {movieFilm}
    </>
  );
}

export default Movies;
