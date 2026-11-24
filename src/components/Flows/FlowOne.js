import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { readDraft, saveDraft } from "../../draftStorage";

import Button from "../Button/Button";
import Header from "../Header/Header";

import "./flows.scss";

export default function FlowOne() {
  let navigate = useNavigate();
  const [values, setValues] = useState(() => readDraft("flow-one", ['fullName', 'displayName']));
  const [storageError, setStorageError] = useState(false);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.fullName.trim().length < 4 || values.displayName.trim().length < 4) {
      setError(true);
    } else {
      setError(false);
      if (!saveDraft("flow-one", { fullName: values.fullName.trim(), displayName: values.displayName.trim() })) { setStorageError(true); return; }
      navigate("/stepTwo", { replace: true });
    }
  };

  return (
    <div className="container">
      {storageError && <p role="alert">Your browser could not save this step. Allow site storage and try again. Your entries are still here.</p>}
      <Header
        headerText="Welcome! First things first"
        tagline="You can always change them later"
        textAlign="center"
      />
      <form onSubmit={handleSubmit} className="mt-5 col m-auto form-container">
        <div className="mb-4">
          <label htmlFor="name" className="form-label ">
            Full Name
          </label>
          <input
            type="text"
            className="form-control  py-3"
            placeholder="Enter Name"
            name="fullName"
            value={values.fullName}
            id="name"
            onChange={handleChange}
          />
          {values.fullName.trim().length < 4 && error && (
            <small role="alert" className="text-danger fst-italic ">
              Enter at least four non-space characters for your full name.
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
            value={values.displayName}
            placeholder="Enter Display Name"
            onChange={handleChange}
          />
          {values.displayName.trim().length < 4 && error && (
            <small role="alert" className="text-danger fst-italic ">
              Enter at least four non-space characters for your display name.
            </small>
          )}
        </div>
        <Button type="submit">Continue</Button>
      </form>
    </div>
  );
}
