
import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

import movies from "../data/movies";
import "../styles/Home.css";

function Home() {
  const genres = [
    "Action",
    "Comedy",
    "Romance",
    "Drama",
    "Thriller",
    "Sci-Fi"
  ];

  return (
    <div className="home-page">

      <Navbar />

      <Hero />

      <section className="trending-section" id="trending">
        <div className="section-heading">
          <div>
            <p className="section-tag">TRENDING NOW</p>
            <h2>Popular Movies</h2>
          </div>

          <a href="/movies">View All →</a>
        </div>

        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="genres-section" id="genres">
        <p className="section-tag">EXPLORE YOUR TASTE</p>
        <h2>Browse By Genre</h2>

        <div className="genre-list">
          {genres.map((genre) => (
            <a
              href={`/movies?genre=${encodeURIComponent(genre)}`}
              className="genre-card"
              key={genre}
            >
              {genre} →
            </a>
          ))}
        </div>
      </section>

      <section className="recommend-section">
        <div>
          <p className="section-tag">POWERED BY MACHINE LEARNING</p>
          <h2>Movies picked just for you.</h2>
          <p>
            Our intelligent recommendation system helps
            you discover movies based on your interests.
          </p>
          <a href="/recommendations" className="explore-btn">
            Get Recommendations →
          </a>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Home;
