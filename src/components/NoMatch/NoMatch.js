import React from "react";
import Header from "../Header/Header";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <>
      <Header></Header>
      <h1 className="no-match">
        <strong>404 Not Found</strong>
      </h1>
    </>
  );
};

export default NoMatch;
