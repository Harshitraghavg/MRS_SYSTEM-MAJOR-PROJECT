
import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">YOUR PERSONAL MOVIE GUIDE</p>

        <h1>
          Discover Movies <br />
          <span>You'll Love.</span>
        </h1>

        <p className="hero-description">
          Find your next favourite movie with CineMatch AI.
          Explore movies based on your interests and discover
          something amazing every day.
        </p>

        <div className="hero-buttons">
          <a href="#trending" className="explore-btn">
            Explore Movies →
          </a>

          <a href="#genres" className="secondary-btn">
            Explore Genres
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
