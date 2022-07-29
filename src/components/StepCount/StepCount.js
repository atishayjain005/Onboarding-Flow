import React from "react";
import { useLocation } from "react-router-dom";
import "./stepCount.scss";

export default function StepCount() {
  let router = useLocation();

  const one = router.pathname === "/" ? "active" : "";
  const two = router.pathname === "/stepTwo" ? "active" : "";
  const three = router.pathname === "/stepThree" ? "active" : "";
  const four = router.pathname === "/stepFour" ? "active" : "";

  console.log(router.pathname);
  return (
    <div className="container my-5">
      <div className=" row text-center col-10 m-auto stepWrapper">
        <div className="col d-flex justify-content-center p-0 ">
          <div className={`step p-3 step-${one || two || three || four}`}>
            1
            <span
              className={`line-right line-${one || two || three || four}`}
            />
          </div>
        </div>
        <div className="col d-flex justify-content-center p-0">
          <div className={`step p-3 step-${two || three || four}`}>
            <span className={`line-left line-${two || three || four}`} />2
            <span className={`line-right line-${two || three || four}`} />
          </div>
        </div>
        <div className="col d-flex justify-content-center p-0">
          <div className={`step p-3 step-${three || four}`}>
            <span className={`line-left line-${three || four}`} />3
            <span className={`line-right line-${three || four}`} />
          </div>
        </div>
        <div className="col d-flex justify-content-center p-0">
          <div className={`step p-3 step-${four}`}>
            4<span className={`line-left line-${four}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
