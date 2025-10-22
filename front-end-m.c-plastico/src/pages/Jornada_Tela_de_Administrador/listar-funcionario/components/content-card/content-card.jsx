import React from "react";
import "./content-card.css";

function ContentCard({ children }) {
  return (
    <div className="content-card">
      {children}
    </div>
  );
}

export default ContentCard;
