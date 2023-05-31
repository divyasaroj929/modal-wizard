import React, { useState } from "react";
import "./form.css";

const Ragister = ({ formData, setFormData }) => {
  const [image, setImage] = useState(false);

  const [lastname, setLastName] = useState("");
  const [errorlastName, setErrorLastName] = useState(false);

  const hendleLastname = (e) => {
    let lastname = e.target.value;
    console.log("name");

    console.log("name", lastname.length);
    if (lastname === "") {
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }
    setLastName(lastname);
  };
  const submitButton = (event) => {
    event.preventDefault();
    console.log(formData);
    let lastname = event.target[1].value;

    if (lastname === "") {
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }
    setLastName(lastname);
    {
      alert("Form has been submitted");
      setImage(true);
    }
  };
  if (image === false)
    return (
      <>
        <form onSubmit={submitButton} className="form-container">
          <div className="info-container">
            <input
              type="text"
              placeholder="Firstname"
              className="input"
              value={formData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
              required
            />

            <input
              type="text"
              placeholder="lastname"
              // value={formData.lastname}
              className="input"
              onChange={hendleLastname}
              // onChange={(e) =>
              //   setFormData({ ...formData, lastname: e.target.value })
              // }
              value={lastname}
            />
            {errorlastName ? (
              <span
                id="warning-2"
                style={
                  {
                    // fontSize: "10px",
                    // color: "red",
                  }
                }
              >
                Last Name must be Fulfill
              </span>
            ) : (
              ""
            )}

            <input
              type="text"
              placeholder="Address"
              className="input"
              value={formData.Address}
              onChange={(e) =>
                setFormData({ ...formData, Address: e.target.value })
              }
            />
          </div>
        </form>
      </>
    );
  console.log("completed");
};

export default Ragister;
