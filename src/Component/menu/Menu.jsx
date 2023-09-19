import "./menu.scss";
import React from "react";

export default function Menu({ menuOpen, setMenuOpen }) {
  // Function to handle the click event on a list item
  const handleMenuItemClick = () => {
    // Set menuOpen to false to hide the menu
    setMenuOpen(false);
  };

  return (
    <div className={"menu " + (menuOpen ? "active" : "")}>
      <ul>
        <li onClick={handleMenuItemClick}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#works">Works</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
