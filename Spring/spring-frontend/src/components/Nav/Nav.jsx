import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/" style={{ margin: "10px" }}>
        Home
      </NavLink>
      <NavLink to="/add-post" style={{ margin: "10px" }}>
        Add new post
      </NavLink>
    </nav>
  );
};

export default Nav;
