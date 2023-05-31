import { useState } from "react";

const Form = () => {
  const [image, setImage] = useState(false);

  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);

  const [lastname, setLastName] = useState("");
  const [errorlastName, setErrorLastName] = useState(false);

  const [aadhar, setAadhar] = useState();
  const [erraadhar, setErrAadhar] = useState(false);

  const [email, setEmail] = useState();
  const [erremail, setErremail] = useState(false);

  const emilregex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const adharregex =
    /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;

  const hendlename = (e) => {
    let name = e.target.value;
    console.log("name", name.length);
    if (name.length < 3) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
    setName(name);
  };

  const hendleLastname = (e) => {
    let lastname = e.target.value;
    console.log("name");

    console.log("name", name.length);
    if (lastname == "") {
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }
    setLastName(name);
  };

  const hendlemail = (e) => {
    console.log("sdfghj");
    let email = e.target.value;
    if (!email.match(emilregex)) {
      setErremail(true);
    } else {
      setErremail(false);
    }
    setEmail(email);
  };

  const hendleadhar = (e) => {
    let aadhar = e.target.value;
    if (!aadhar.match(adharregex)) {
      setErrAadhar(true);
    } else {
      setErrAadhar(false);
    }
    setAadhar(aadhar);
  };

  const submitButton = (e) => {
    e.preventDefault();
    console.log(e.target);

    let name = e.target[0].value;

    if (name.length < 3) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    let lastname = e.target[1].value;

    if (lastname == "") {
      setErrorLastName(true);
    } else {
      setErrorLastName(false);
    }
    setLastName(name);

    let aadhar = e.target[2].value;
    if (!aadhar.match(adharregex)) {
      setErrAadhar(true);
    } else {
      setErrAadhar(false);
    }

    let email = e.target[3].value;
    if (!email.match(emilregex)) {
      setErremail(true);
    } else {
      setErremail(false);
    }

    if (
      !name.lenght < 3 &&
      !lastname == "" &&
      email.match(emilregex) &&
      aadhar.match(adharregex)
    ) {
      alert("Form has been submitted");
      setImage(true);
    }
  };
  if (image === false)
    return (
      <>
        <div className="second-container">
          <form onSubmit={submitButton}>
            <div className=" heading-box">Create an account</div>
            <div className="all-input-box">
              <div className="two-container">
                <div className="div-3">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    autoComplete="off"
                    id="fname"
                    onChange={hendlename}
                    value={name}
                  />
                  {errorName ? (
                    <span
                      id="warning-1"
                      style={
                        {
                          // fontSize: "10px",
                          // color: "red",
                        }
                      }
                    >
                      First Name lenght greater than 2 character
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="div-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    autoComplete="off"
                    id="lname"
                    onChange={hendleLastname}
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
                </div>
              </div>

              <div className="div-3">
                <label>Aadhar card</label>
                <input
                  type="text"
                  placeholder="78XX 45XX 97XX"
                  autoComplete="off"
                  id="adhar"
                  onChange={hendleadhar}
                  value={aadhar}
                />
                {erraadhar ? (
                  <span
                  // id="warning-3"
                  // style={{ fontSize: "9px", color: "red" }}
                  >
                    The aadhaar number must be 12 digit
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="div-3">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your Email"
                  // autoComplete="off"
                  // required
                  id="mail"
                  onChange={hendlemail}
                  value={email}
                />
                {erremail ? (
                  <span
                  // id="warning-4"
                  // style={{ fontSize: "9px", color: "red" }}
                  >
                    Enter your valid email
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="btn">
                <button type="submit" id="submit">
                  Create account
                </button>
              </div>
            </div>
            <div className=" atag-signin">
              <span className="alert">
                Already have an account ?<a href="#">login</a>
              </span>
            </div>
          </form>
          <div className="bubble">
            <img src="" alt="img" className="logo" />
          </div>
        </div>
      </>
    );

  console.log("complete");
  return;
};
export default Form;
