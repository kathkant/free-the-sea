import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../config/styles";

const TopNav = ({ location }) => (
  <nav>
    <Link to="/">
      <div className="f4 f3-ns dib w-100 pointer" style={{ color: "white" }}>
        KAYLA KANTOLA
      </div>
    </Link>
    <Link to="/who">
      <div
        className="f6 f5-ns dib mr4 mt2 pointer"
        style={{
          color: location === "who" ? "white" : Colors.primaryLight
        }}
      >
        WHO IS SHE?
      </div>
    </Link>
    <Link to="/what">
      <div
        className="f6 f5-ns dib mt2 pointer"
        style={{
          color: location === "what" ? "white" : Colors.primaryLight
        }}
      >
        WHAT IS SHE DOING?
      </div>
    </Link>
  </nav>
);

export default TopNav;
