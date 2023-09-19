import React from "react";
import "./portfolioList.scss";

export default function PortfolioList({ title, active, setSelected }) {
  console.log("Title", title.toLowerCase());
  return (
    <li
      className={`portfolioList ${active ? "active" : ""}`}
      onClick={() => setSelected(title.toLowerCase())} // Convert title to lowercase
    >
      {title}
    </li>
  );
}
