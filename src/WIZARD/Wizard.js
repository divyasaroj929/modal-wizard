import React, { useState } from "react";
import Propswizard from "./Propswizard";
import { BsArrowLeft } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import "./wizard.css";

const Wizard = () => {
  const [closedailog, setClosedailog] = useState(false);

  const openwizardOnclick = () => {
    setClosedailog(false);
  };

  const data = [
    {
      label: "step 1",
      title: "header title",
      pageinfo: `STEP 1 OUT OF 3`,
      // icon: <BsArrowLeft />,
      icon2: <BiX />,
    },
    {
      label: "step 2",
      title: "header title",
      pageinfo: `STEP 2 OUT OF 3`,
      icon: <BsArrowLeft />,
      icon2: <BiX />,
    },
    {
      label: "step 3",
      title: "header title",
      pageinfo: `STEP 3 OUT OF 3`,
      icon: <BsArrowLeft />,
      icon2: <BiX />,
    },
  ];

  return (
    <>
      <div className="open-wizard-parent">
        <button
          onClick={() => setClosedailog(true)}
          className="wizard-parent-button"
        >
          open wizard
        </button>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
          </p>
          <br></br>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
          </p>
          <br></br>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
          </p>
          <br></br>
        </div>
        {closedailog && <Propswizard closedailog={openwizardOnclick} />}
      </div>
    </>
  );
};

export default Wizard;
