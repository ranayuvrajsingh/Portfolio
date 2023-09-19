import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      // showCursor: true,
      // backDelay: 500,
      // backSpeed: 60,
      strings: [" Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assests/YuvJ.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Rana Yuvraj Singh</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a className="arrow-link" href="#portfolio">
          <img className="arrow-img" src="assests/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
