import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./stepCount.scss";

export default function StepCount() {
  const {pathname} = useLocation();
  const steps = [["/", "Profile"], ["/stepTwo", "Workspace"], ["/stepThree", "Usage"], ["/stepFour", "Complete"]];
  const current = Math.max(0, steps.findIndex(([path]) => path === pathname));
  return <nav aria-label="Onboarding progress" className="container my-5">
    <ol className="steps">
      {steps.map(([path, label], index) => <li key={path} aria-current={index === current ? "step" : undefined}>
        {index < current ? <Link to={path}><span>{index + 1}</span>{label}</Link> : <><span>{index + 1}</span>{label}</>}
      </li>)}
    </ol>
  </nav>;
}
