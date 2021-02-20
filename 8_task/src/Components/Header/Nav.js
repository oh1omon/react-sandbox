import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      {" "}
      {/* Don't do navigation like that, use Router instead */}
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/new_post">new post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
