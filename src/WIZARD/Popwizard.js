import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { createPortal } from "react-dom";
import Button from "../ALLCOMPONENT/Button";

import { BiX } from "react-icons/bi";

import "./wizard.css";

import Header from "../ALLCOMPONENT/Header";

import Para from "../ALLCOMPONENT/Para";

const Popwizard = ({
  closedailog,
  wizardData,
  currentIndex,
  setCurrentIndex,
}) => {
  const backIconFun = () => {
    setCurrentIndex((index) => index - 1);
  };
  return createPortal(
    <>
      <div className="wizard-warpper" onClick={closedailog}></div>
      {wizardData.map((item, index) => {
        return (
          <>
            <div className="wizard-container">
              {currentIndex > 0 ? (
                <Header
                  title={item.head[currentIndex]}
                  bix={<BiX onClick={closedailog} />}
                  index={
                    currentIndex[0] ? "" : <BsArrowLeft onClick={backIconFun} />
                  }
                  currentIndex={currentIndex}
                  total={item.head.length}
                />
              ) : (
                <Header
                  title={item.head[currentIndex]}
                  bix={<BiX onClick={closedailog} />}
                  currentIndex={currentIndex}
                  total={item.head.length}
                />
              )}
              <div className="wizard-body-container">
                {item.context[currentIndex]}
              </div>

              <div className="Footer-wizard-container">
                <Para
                  className="alert-text"
                  para={
                    item.context[currentIndex]
                      ? ""
                      : // ? item.para[page]
                        "Opps! Connection failed, Please re-check your"
                  }
                />
                {currentIndex === item.head.length - 1 ? (
                  <div className="button-container">
                    <Button
                      name="cancel"
                      variant="ghost"
                      onClick={closedailog}
                    />
                    <Button name="finish" onClick={closedailog} />
                  </div>
                ) : (
                  <div className="button-container">
                    <Button
                      name="cancel"
                      variant="ghost"
                      onClick={closedailog}
                    />
                    <Button
                      name="next"
                      onClick={() => {
                        setCurrentIndex((index) => index + 1);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        );
      })}
    </>,
    document.querySelector(".modal-protalReact")
  );
};

export default Popwizard;
