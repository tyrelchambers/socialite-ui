import React from "react";

const Wrapper = (props) => {
  return (
    <section
      className={`max-w-screen-xl ml-auto mr-auto w-full ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </section>
  );
};

export default Wrapper;
