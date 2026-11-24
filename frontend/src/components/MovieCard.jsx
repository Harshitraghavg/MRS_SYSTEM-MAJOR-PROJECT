
import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />

        <span className="rating">
          ★ {movie.rating}
        </span>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          {movie.year} · {movie.genre}
        </p>

        <span className="movie-description">
          {movie.description}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
