import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { readDraft, saveDraft } from "../../draftStorage";

import Button from "../Button/Button";
import Header from "../Header/Header";

import "./flows.scss";

export default function FlowTwo() {
  let navigate = useNavigate();

  const [values, setValues] = useState(() => readDraft("flow-two", ['workspaceName', 'url']));
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

  const handleSubmit = () => {
    if (values.workspaceName.length < 4) {
      setError(true);
    } else {
      setError(false);
      if (!saveDraft("flow-two", values)) { setStorageError(true); return; }
      navigate("/stepThree", { replace: true });
    }
  };

  return (
    <div className="container">
      {storageError && <p role="alert">Your browser could not save this step. Allow site storage and try again. Your entries are still here.</p>}
      <Header
        headerText="Let's setup home for all your work"
        tagline="You can always create another workspace later."
        textAlign="center"
      />
      <div className="mt-5 col m-auto form-container ">
        <div className="mb-4">
          <label htmlFor="workspaceName" className="form-label ">
            Workspace Name
          </label>
          <input
            type="email"
            className="form-control  py-3"
            placeholder="Enter Workspace Name"
            name="workspaceName"
            value={values.workspaceName}
            id="workspaceName"
            onChange={handleChange}
          />
          {values.workspaceName.length < 4 && error && (
            <small className="text-danger fst-italic ">
              *Workspace Name should contain more then four letters*
            </small>
          )}
        </div>

        <label htmlFor="basic-url" className="form-label">
          Workspace URL&nbsp;<span className="text-muted">(optional)</span>
        </label>
        <div className="input-group mb-4">
          <span className="input-group-text" id="basic-addon3">
            www.eden.com/
          </span>
          <input
            type="text"
            className="form-control py-3"
            id="basic-url"
            name="url"
            value={values.url}
            aria-describedby="basic-addon3"
            onChange={handleChange}
          />
        </div>
        <Button cta={handleSubmit}>Create Workspace</Button>
      </div>
    </div>
  );
}
