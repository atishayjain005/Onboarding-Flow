import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Header from "../Header/Header";

import "./flows.scss";

const initialState = {
  fullName: "",
  displayName: "",
};

export default function FlowOne() {
  let navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    let name = e.target.name;
    let val = e.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = () => {
    if (values.fullName.length < 4 || values.displayName.length < 4) {
      setError(true);
    } else {
      setError(false);
      localStorage.setItem("flow-one", JSON.stringify(values));
      navigate("/stepTwo", { replace: true });
    }
  };

  return (
    <div className="container">
      <Header
        headerText="Welcome! First things first"
        tagline="You can always change them later"
        textAlign="center"
      />
      <div className="mt-5 col m-auto form-container">
        <div className="mb-4">
          <label htmlFor="name" className="form-label ">
            Full Name
          </label>
          <input
            type="text"
            className="form-control  py-3"
            placeholder="Enter Name"
            name="fullName"
            id="name"
            onChange={handleChange}
          />
          {values.fullName.length < 4 && error && (
            <small className="text-danger fst-italic ">
              *Fullname should contain more then four letters*
            </small>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="displayName" className="form-label">
            Display Name
          </label>
          <input
            className="form-control py-3"
            id="displayName"
            name="displayName"
            placeholder="Enter Display Name"
            onChange={handleChange}
          />
          {values.displayName.length < 4 && error && (
            <small className="text-danger fst-italic ">
              *Display Name should contain more then four letters*
            </small>
          )}
        </div>
        <Button cta={handleSubmit}>Create Workspace</Button>
      </div>
    </div>
  );
}
