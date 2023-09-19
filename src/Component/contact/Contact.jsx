import React from "react";
import { useState, useEffect } from "react";
import "./contact.scss";
import Lottie from "react-lottie";
import logoAnimation from "./Animation/Shake.json"; // Replace with the correct path to your Lottie animation JSON file

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
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: logoAnimation,
  };
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
    <div className="contact" id="contact">
      <div className="left">
        <Lottie
          options={lottieOptions}
          width={responsiveWidth}
          height={responsiveHeight}
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
          {message && <span>Thanks ,I'll reply ASAP</span>}
        </form>
      </div>
      <footer className="footer">
        <div className="year">&copy; 2023 YuvJ. All rights reserved.</div>
      </footer>
    </div>
  );
}
