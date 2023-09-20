import React, { useState, useEffect } from "react";
import "./contact.scss";
import Lottie from "lottie-react";
import logoAnimation from "./Animation/Shake.json";

export default function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const postUserData = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    // Send the userData to Firebase Firestore
    const res = await fetch(
      "https://portfolio-yuvj-default-rtdb.firebaseio.com/ContactDetails.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData), // Send the userData object
      }
    );

    if (res.ok) {
      alert("Contact Information Sent");
    } else {
      alert("Please Fill the data");
    }
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
        <form onSubmit={handleSubmit} method="POST">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={userData.name}
            onChange={postUserData}
            required
          />

          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={postUserData}
            required
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={userData.phone}
            onChange={postUserData}
            required
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            id="message"
            value={userData.message}
            onChange={postUserData}
            required
            placeholder="Message"
          ></textarea>
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
