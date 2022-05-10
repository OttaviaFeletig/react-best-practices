import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/cleanup">Cleanup</Link>
      <Link to="/customHook">Custom Hook</Link>
      <Link to="/contextAndCustomHook">Context and Custom Hook</Link>
    </nav>
  );
};

export default Navigation;
