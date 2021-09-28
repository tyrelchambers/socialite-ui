import React from "react";

const H1 = (props) => (
  <h1 className={`text-white font-bold ${props.className ?? ""}`}>
    {props.children}
  </h1>
);

export default H1;
