import React from "react";
import "./topbar.scss";
import Lottie from "react-lottie";

import yourLottieAnimation1 from "./Animation/Phone.json"; // Replace with your animation file path for the first itemContainer
import yourLottieAnimation2 from "./Animation/Email.json"; // Replace with your animation file path for the second itemContainer

export default function Topbar({ menuOpen, setMenuOpen }) {
  const animationOptions1 = {
    loop: true,
    autoplay: true,
    animationData: yourLottieAnimation1, // Replace with your animation import for the first itemContainer
    rendererSettings: {
      // Hide the cursor provided by Lottie
      hideOnTransparent: true,
    },
  };

  const animationOptions2 = {
    loop: true,
    autoplay: true,
    animationData: yourLottieAnimation2, // Replace with your animation import for the second itemContainer
    rendererSettings: {
      // Hide the cursor provided by Lottie
      hideOnTransparent: true,
    },
  };

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
              options={animationOptions1}
              height={80} // Adjust the height as needed
              width={80} // Adjust the width as needed
            />
          </div>
          <a href="tel:8445847591">
            <span style={{ marginLeft: "-1px" }}>8445847591</span>
          </a>

          <div className="itemContainer">
            <Lottie
              style={{ marginTop: "-8px", marginLeft: "50px" }}
              options={animationOptions2}
              height={50} // Adjust the height as needed
              width={50} // Adjust the width as needed
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
