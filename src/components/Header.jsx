import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="head">
      <h1>Grapes IDMR</h1>
      <input type="text" placeholder="Search MRN or Patient name" />
    </header>
  );
}

export default Header;
