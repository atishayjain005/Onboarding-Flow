import React from "react";

export default function Header({ headerText, tagline, textAlign }) {
  return (
    <div >
      <h1 className={` fw-bold text-${textAlign}`}>{headerText}</h1>
      {tagline && (
        <p className={`h5 mt-3 fw-normal text-secondary text-${textAlign}`}>
          {tagline}
        </p>
      )}
    </div>
  );
}
