import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { readDraft, saveDraft } from "../../draftStorage";
import Button from "../Button/Button";
import Header from "../Header/Header";
import "./flows.scss";

export default function FlowThree() {
  const navigate = useNavigate();
  const [usage, setUsage] = useState(() => readDraft("flow-three", ["usage"]).usage === "team" ? "team" : "personal");
  const [error, setError] = useState(false);
  const profile = readDraft("flow-one", ["fullName", "displayName"]);
  const workspace = readDraft("flow-two", ["workspaceName"]);
  if (!profile.fullName.trim() || !profile.displayName.trim()) return <Navigate to="/" replace />;
  if (!workspace.workspaceName.trim()) return <Navigate to="/stepTwo" replace />;
  function submit(event) {
    event.preventDefault();
    if (!saveDraft("flow-three", {usage})) { setError(true); return; }
    navigate("/stepFour");
  }
  return <div className="container">
    <Header headerText="How are you planning to use Eden?" tagline="Choose a setup for this onboarding demo." textAlign="center" />
    <form onSubmit={submit} className="mt-5 m-auto form-container">
      <fieldset>
        <legend className="h6">Workspace use</legend>
        <div className="usage-options">
          {[["personal", "For myself", "A personal workspace."], ["team", "With my team", "A shared workspace."]].map(([value, title, description]) =>
            <label className="card p-3" key={value}>
              <input type="radio" name="usage" value={value} checked={usage === value} onChange={() => setUsage(value)} />
              <strong>{title}</strong><span>{description}</span>
            </label>
          )}
        </div>
      </fieldset>
      {error && <p role="alert">Your browser could not save this choice. Allow site storage and try again.</p>}
      <Button type="submit">Complete demo</Button>
    </form>
  </div>;
}
