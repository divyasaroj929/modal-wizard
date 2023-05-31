import React from "react";
import "./form.css";

const ContactInfo = ({ formData, setFormData }) => {
  const submitButton = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={submitButton} className="form-container">
        <div className="info-container">
          <input
            type="number"
            placeholder="Number"
            value={formData.number}
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Alternative number"
            value={formData.Alternative}
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, Alternative: e.target.value })
            }
          />
        </div>
      </form>
    </>
  );
};

export default ContactInfo;
