import React, { useState } from "react";
import "./header.css";
import Progressbar from "./Progressbar";

const Header = ({ title, bix, index, currentIndex, total }) => {
  const [isloggin, setIsloggin] = useState(false);

  let activeIndex = currentIndex + 1;

  return (
    <>
      <div className="header-section">
        {!isloggin === !index ? (
          <div
            className="header-title"
            style={{ display: "block", padding: "0px" }}
          >
            <div className="header-title-name">{title}</div>
          </div>
        ) : (
          <div className="header-title" style={{ display: "flex" }}>
            <div className="back-icon">{index}</div>
            <div className="header-title-name">{title}</div>
          </div>
        )}

        <div className="page-count">
          <div className="count-page-step">
            <span>
              step <strong>{activeIndex}</strong> out of
              <strong> {total}</strong>
            </span>
          </div>
          <div className="cross-icon">{bix}</div>
        </div>
      </div>
      <Progressbar
        style={{
          width: `${(100 / total) * activeIndex}%`,
        }}
      />
    </>
  );
};

export default Header;
