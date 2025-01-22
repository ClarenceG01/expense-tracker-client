import React from "react";

const Card = (props) => {
  const className = props.className + " " + "shadow-cardShadow";
  return <div className={className}>{props.children}</div>;
};

export default Card;
