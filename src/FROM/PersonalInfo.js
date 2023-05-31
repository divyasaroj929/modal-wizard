import React from "react";
import "./form.css";

const PersonalInfo = ({ formData, setFormData }) => {
  console.log(formData);

  const submitButton = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleCheck = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={submitButton} className="form-container">
        <div className="info-container">
          <input
            type="text"
            placeholder="name"
            className="input"
            value={formData.Name}
            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
          />
          <input
            type="text"
            placeholder="userName"
            value={formData.username}
            className="input"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="NickName"
            className="input"
            value={formData.NickName}
            onChange={(e) =>
              setFormData({ ...formData, NickName: e.target.value })
            }
          />
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
