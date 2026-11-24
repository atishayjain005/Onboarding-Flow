import React from "react";
import { Navigate } from "react-router-dom";
import { readDraft } from "../../draftStorage";
import { BsCheckCircleFill } from "react-icons/bs";

import Header from "../Header/Header";

import "./flows.scss";

export default function FlowFour() {
  const displayName = readDraft("flow-one", ["fullName", "displayName"]);

  if (!displayName.fullName.trim() || !displayName.displayName.trim()) return <Navigate to="/" replace />;

  const workspace = readDraft("flow-two", ["workspaceName"]);
  const choice = readDraft("flow-three", ["usage"]);
  if (!workspace.workspaceName.trim()) return <Navigate to="/stepTwo" replace />;
  if (!["personal", "team"].includes(choice.usage)) return <Navigate to="/stepThree" replace />;

  return (
    <div className="container">
      <div className="text-center py-5">
        <BsCheckCircleFill className="checkMark" />
      </div>
      <Header
        headerText={`Demo complete, ${displayName.displayName}!`}
        tagline="Your choices are saved in this browser. No account or live workspace has been created."
        textAlign="center"
      />
      <p className="text-center summary">{workspace.workspaceName} · {choice.usage === "team" ? "Team" : "Personal"} workspace</p>
    </div>
  );
}
