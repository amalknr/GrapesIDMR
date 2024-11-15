import React from "react";

function SurgeryCard({ patient, doctor, date, time, caseType }) {
  return (
    <div className="surgery-card">
      <h3>{patient}</h3>
      <p>Dr: {doctor}</p>
      <p>Case: {caseType}</p>
      <p>{date} - {time}</p>
    </div>
  );
}

export default SurgeryCard;
