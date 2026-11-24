import React from "react";
import { Navigate } from "react-router-dom";
import { readDraft } from "../../draftStorage";
import { BsCheckCircleFill } from "react-icons/bs";

import Header from "../Header/Header";

import "./flows.scss";

export default function FlowFour() {
  const displayName = readDraft("flow-one", ["fullName", "displayName"]);

  if (!displayName.fullName.trim() || !displayName.displayName.trim()) return <Navigate to="/" replace />;

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
