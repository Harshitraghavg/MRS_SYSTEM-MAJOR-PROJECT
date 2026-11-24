
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        Cine<span>Match</span>
      </a>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#trending">Movies</a>
        <a href="#genres">Genres</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-buttons">
        <a href="/login" className="login-btn">Login</a>
        <a href="/register" className="register-btn">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
