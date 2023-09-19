import React, { useState, useEffect } from "react";
import "./contact.scss";
import Lottie from "lottie-react";
import logoAnimation from "./Animation/Shake.json";

export default function Contact() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let responsiveWidth = "750px";
  let responsiveHeight = "750px";

  if (windowWidth <= 768) {
    responsiveWidth = "100%";
    responsiveHeight = "100%";
  }

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="5">
      <div className="left">
        <Lottie
          animationData={logoAnimation} // Use 'animationData' prop instead of 'lottieOptions'
          loop={true}
          autoplay={true}
          style={{
            width: responsiveWidth,
            height: responsiveHeight,
          }}
          className="lottie-animation"
        />
      </div>

      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="btn btn-warning">
            Send
          </button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
      <footer className="footer">
        <div className="year">&copy; 2023 YuvJ. All rights reserved.</div>
      </footer>
    </div>
  );
}
