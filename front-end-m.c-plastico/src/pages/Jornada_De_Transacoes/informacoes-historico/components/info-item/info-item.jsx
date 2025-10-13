import React from 'react';
import './info-item.css';

function InfoItem({ label, value, showDivider = true }) {
  return (
    <>
      <div className="info-item">
        <p className="label-info">{label}</p>
        <p className="valor">{value}</p>
      </div>
      {showDivider && <hr />}
    </>
  );
}

export default InfoItem;