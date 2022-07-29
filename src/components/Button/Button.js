import React from "react";
import "./button.css";

export default function Button({ children,cta }) {
  return (
    <div id="button" className="rounded-3 text-center text-white p-3" onClick={cta}>
      {children}
    </div>
  );
}
