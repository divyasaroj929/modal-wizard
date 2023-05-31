import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Button from "../ALLCOMPONENT/Button";

import { BiX } from "react-icons/bi";

import "./wizard.css";

import Header from "../ALLCOMPONENT/Header";

import Para from "../ALLCOMPONENT/Para";

const Propswizar1 = ({ closedailog, wizardData, page, setPage }) => {
  // const [page, setPage] = useState(0);

  console.log(page);
  const backIconFun = () => {
    setPage((index) => index - 1);
  };

  return (
    <>
      <div className="wizard-warpper" onClick={closedailog}></div>
      {wizardData.map((item, index) => {
        return (
          <>
            <div className="wizard-container">
              {page > 0 ? (
                <Header
                  title={item.head[page]}
                  bix={<BiX onClick={closedailog} />}
                  index={page[0] ? "" : <BsArrowLeft onClick={backIconFun} />}
                  currentIndex={page}
                  total={item.head.length}
                />
              ) : (
                <Header
                  title={item.head[page]}
                  bix={<BiX onClick={closedailog} />}
                  currentIndex={page}
                  total={item.head.length}
                />
              )}
              <div className="wizard-body-container">{item.context[page]}</div>

              <div className="Footer-wizard-container">
                <Para
                  className="alert-text"
                  para={
                    item.context[page]
                      ? ""
                      : // ? item.para[page]
                        "Opps! Connection failed, Please re-check your"
                  }
                />
                {page == item.head.length - 1 ? (
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
                        setPage((index) => index + 1);
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Propswizar1;
