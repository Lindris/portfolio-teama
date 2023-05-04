import React from "react";
import "./H1Component.css";

const H1Component = ({ message = "" }) => {
  return (
    <h1 className="Name" type="title">
      {message}
    </h1>
  );
};

export default H1Component;
