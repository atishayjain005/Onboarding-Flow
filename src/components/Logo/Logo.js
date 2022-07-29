import React from "react";

import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
