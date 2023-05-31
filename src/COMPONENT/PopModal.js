import React, { useEffect } from "react";
import { BiX } from "react-icons/bi";
import { createPortal } from "react-dom";
import Button from "../ALLCOMPONENT/Button";
import Para from "../ALLCOMPONENT/Para";

const PopModal = ({ closeModal }) => {
  // useEffect =
  //   (() => {
  //     document.body.style.overFlowY = "hidden";
  //     return () => {
  //       document.body.style.overFlowY = "scroll";
  //     };
  //   },
  //   []);
  return createPortal(
    <>
      <div className="modal-warrper" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="Modal-header">
          <p>Dialog Header Title</p>
          <div className="modal-cross-icon" onClick={closeModal}>
            <BiX />
          </div>
        </div>
        <div className="modal-body-message">
          <Para
            // className="alert-text"
            className="modal-body-message"
            para="Click outside or press escape key in order to close the dialog Click"
          />
          {/* outside or press escape key in order to close the dialog */}
        </div>
        <div className="button-container-modal">
          <Button
            name="cencel"
            variant="ghost"
            // className="modal-click-btn-host"
            // type="button"
            onClick={closeModal}
          />
          <Button
            name="done"
            // className="modal-click-btn-done"
            onClick={closeModal}
          />

          {/* <button onClick={closeModal} className="modal-click-btn-host">
            CANCEL
          </button>
          <button className="modal-click-btn-done" onClick={closeModal}>
            Done
          </button> */}
        </div>
        {/* </div> */}
      </div>
    </>,
    document.querySelector(".modal-protalReact")
  );
};

export default PopModal;
