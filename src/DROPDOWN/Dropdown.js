import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
const Dropdown = ({ data, selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  const onClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="dropdown-container" ref={menuRef}>
        <div className="dropdown-container-header" onClick={onClick}>
          <input
            type="text"
            placeholder=" dropdown"
            value={selected}
            className="input"
            disabled
          />
          <BiChevronDown className="arrow-btn" onClick={onClick} />
        </div>
        {isActive && (
          <div className="dropdown-item">
            {data.map((item) => {
              return (
                <>
                  <div
                    className="item-box"
                    onClick={(e) => {
                      setSelected(item.name);
                      setIsActive(false);
                    }}
                  >
                    {item.name}
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
