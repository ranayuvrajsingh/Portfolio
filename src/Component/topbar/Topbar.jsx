import React from "react";
import "./topbar.scss";
import Lottie from "lottie-react"; // Import Lottie React

import yourLottieAnimation1 from "./Animation/Phone.json";
import yourLottieAnimation2 from "./Animation/Email.json";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a
            href="#contact"
            className="logo"
            style={{
              fontSize: "40px",
              fontWeight: 700,
              textDecoration: "none",
              background: "linear-gradient(to right, #ff0000, #0000ff)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            YuvJ
          </a>

          <div className="itemContainer">
            <Lottie
              animationData={yourLottieAnimation1}
              loop={true}
              autoplay={true}
              style={{ height: 80, width: 80 }} // Adjust the height and width as needed
            />
          </div>
          <a href="tel:8445847591">
            <span style={{ marginLeft: "-1px" }}>8445847591</span>
          </a>

          <div className="itemContainer">
            <Lottie
              animationData={yourLottieAnimation2}
              loop={true}
              autoplay={true}
              style={{
                marginTop: "-8px",
                marginLeft: "50px",
                height: 50,
                width: 50,
              }} // Adjust the height and width as needed
            />
            <a href="mailto:ranayuvrajsingh0000@gmail.com">
              <span style={{ marginLeft: "30px" }}>
                ranayuvrajsingh0000@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
