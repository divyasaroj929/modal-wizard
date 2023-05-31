import React from "react";

const Progressbar = (props) => {
  return (
    <>
      <div className="progress-bar-container">
        <div className={props.progressbar} style={props.style}></div>
      </div>
    </>
  );
};

export default Progressbar;
