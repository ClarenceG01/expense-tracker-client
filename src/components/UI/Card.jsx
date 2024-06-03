import React from "react";
import "./Card.css";

const Card = (props) => {
  const className = props.className + " " + "card";
  return <div className={className}>{props.children}</div>;
};

export default Card;
