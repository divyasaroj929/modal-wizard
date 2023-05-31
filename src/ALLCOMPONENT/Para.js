import React, { useState } from "react";
import "./para.css";

const Para = ({ para, className }) => {
  const [message, setMessage] = useState(false);
  let value = "";
  return (
    <>
      <p className={className}>{para}</p>
    </>
  );
};

export default Para;
