import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

import Header from "../Header/Header";

import "./flows.scss";

export default function FlowFour() {
  const displayName = JSON.parse(localStorage.getItem("flow-one"));

  return (
    <div className="container">
      <div className="text-center py-5">
        <BsCheckCircleFill className="checkMark" />
      </div>
      <Header
        headerText={`Congratulation, ${displayName.displayName}!`}
        tagline="You have completed onboarding, you can start using Eden"
        textAlign="center"
      />
    </div>
  );
}
