import React from "react";
import "./button.css";

export default function Button({ children, cta, type = "button" }) {
  return <button type={type} className="flow-button rounded-3 text-center text-white p-3 w-100" onClick={cta}>{children}</button>;
}
