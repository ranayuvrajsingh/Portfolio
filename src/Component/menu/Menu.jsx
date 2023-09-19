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
          <a href="#1">Home</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#2">Portfolio</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#3">Works</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#4">Testimonials</a>
        </li>
        <li onClick={handleMenuItemClick}>
          <a href="#5">Contact</a>
        </li>
      </ul>
    </div>
  );
}
