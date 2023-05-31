import React, { useState } from "react";
import PopModal from "./PopModal";
import "./dropdwon.css";
import "./modal.css";

import Dropdown from "../DROPDOWN/Dropdown";
import Popwizard from "../WIZARD/Popwizard";
import Button from "../ALLCOMPONENT/Button";

import Step1 from "../WIZARD/STEP/Step1";
import Step2 from "../WIZARD/STEP/Step2";
import Step3 from "../WIZARD/STEP/Step3";
import Propswizar1 from "../WIZARD/Propswizar1";

import Accordion from "../ACCORDIAN/Accordion";
import Ragister from "../FROM/Ragister";
import Form from "../FROM/Form";
import PersonalInfo from "../FROM/PersonalInfo";
import ContactInfo from "../FROM/ContactInfo";
const Modal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [modal, setModal] = useState(false);

  const [selected, setSelected] = useState();

  const [showdailog, setShowdailog] = useState(false);

  const [openDailog, setOpenDailog] = useState(false);

  const [formData, setFormData] = useState({
    Email: " ",
    password: "",
    firstname: "",
    lastname: "",
    Address: "",
    number: "",
    fullname: "",
    username: "",
    nickname: "",
  });

  const closeModal = (e) => {
    e.stopPropagation();
    setModal(false);
  };

  const openwizardOnclick = () => {
    setShowdailog(false);
    setOpenDailog(false);
  };

  const dropdownData = [
    {
      name: "a",
    },
    {
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting and scrambled it to make a type specimen book. It has survived not only",
    },
    {
      name: "c",
    },
    {
      name: "Lorem Ipsum is simply dummy text of the printing and typesetting and scrambled it to make a type specimen book. It has survived not only",
    },
    {
      name: "e",
    },
    {
      name: "apple",
    },
  ];

  const wizardData = [
    {
      head: ["page", "personal info", "final check", "app", "red"],
      context: [<Step1 />, <Step2 />, <Step3 />, <Step1 />],
    },
  ];

  const wizardData1 = [
    {
      head: ["Ragister here", "personal info", "contact info", "form"],
      context: [
        <Ragister
          formData={formData}
          setFormData={setFormData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />,
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />,
        <ContactInfo
          formData={formData}
          setFormData={setFormData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />,
      ],
    },
  ];

  const AccordionApi = [
    {
      id: "1",
      question: "what is react js",
      answer: "React components are JavaScript functions",
    },
    {
      id: "2",
      question: "what is react js",
      answer: "React components are JavaScript functions",
    },
    {
      id: "3",
      question: "what is react js",
      answer:
        "React components are JavaScript functions.React components are JavaScript functionsReact components are JavaScript functionsReact components are JavaScript functionsReact components are JavaScript functions",
    },
    {
      id: "4",
      question: "what is react js",
      answer: "React components are JavaScript functions",
    },
    {
      id: "5",
      question: "what is react js",
      answer: "React components are JavaScript functions",
    },
    {
      id: "6",
      question: "what is react js",
      answer: "React components are JavaScript functions",
    },
  ];

  return (
    <>
      <div className="modal-parent-container">
        <div className="modal-seacond-parent-container">
          <div className="header">
            {/* <button onClick={() => setModal(true)} className="modal-click-btn">
              Open modal
            </button>

            <button
              onClick={() => setClosedailog(true)}
              className="wizard-parent-button"
            >
              open wizard
            </button> */}

            <Button onClick={() => setModal(true)} name="MODAL" />
            <Button onClick={() => setShowdailog(true)} name=" FIVE WIZARD" />
            <Button onClick={() => setOpenDailog(true)} name="WIZARD" />

            <div className="dropdwon">
              <Dropdown
                data={dropdownData}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </div>

          <div className="div-message">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where does it come from?
          </div>

          <Accordion AccordionApi={AccordionApi} />
        </div>

        {modal && <PopModal closeModal={(e) => closeModal(e)} />}

        {showdailog && (
          <Popwizard
            closedailog={openwizardOnclick}
            wizardData={wizardData}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
        {openDailog && (
          <Popwizard
            closedailog={openwizardOnclick}
            wizardData={wizardData1}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </div>
    </>
  );
};

export default Modal;
