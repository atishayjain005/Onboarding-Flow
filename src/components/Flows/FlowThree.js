import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill, BsFillPeopleFill } from "react-icons/bs";

import Button from "../Button/Button";
import Header from "../Header/Header";

import "./flows.scss";

export default function FlowThree() {
  let navigate = useNavigate();
  const [state, setState] = useState(false);

  return (
    <div className="container">
      <Header
        headerText="How are you planning to use Eden?"
        tagline="We'll streamline your setup experience accordingly"
        textAlign="center"
      />
      <div className=" col mt-5 m-auto form-container">
        <div className="row gap-5 mb-4 w-100 m-auto">
          <div
            className={`col-sm card cardWrapper ${!state && "active"}`}
            onClick={() => setState(false)}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                <BsFillPersonFill className="peopleIcon" />
              </h5>
              <h5 className="card-title mb-3">Card title</h5>
              <p className="card-text text-muted">
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </div>
          <div
            className={`col-sm card cardWrapper ${state && "active"}`}
            onClick={() => setState(true)}
          >
            <div className="card-body">
              <h5 className="card-title mb-3">
                <BsFillPeopleFill className="peopleIcon" />
              </h5>
              <h5 className="card-title mb-3">Card title</h5>
              <p className="card-text text-muted">
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </div>
        </div>
        <Button cta={() => navigate("/stepFour", { replace: true })}>
          Create Workspace
        </Button>
      </div>
    </div>
  );
}
