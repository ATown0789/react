import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h1>TEK News</h1>
      <Link to="/">Headlines</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/politics">Politics</Link>
    </nav>
  );
}

export default NavBar;
