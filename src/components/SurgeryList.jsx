import React from "react";
import SurgeryCard from "./SurgeryCard"; // Import SurgeryCard component
import "./SurgeryList.css";
import "./SurgeryCard.css";
import "./Footer.css";

const surgeries = [
  {
    id: 1,
    patientName: "EBIN",
    doctorName: "Dr. SAJIN, SHOBITH",
    date: "05-10-2024",
    time: "10:14 AM",
    caseType: "APPENDECTOMY",
    status: "Upcoming",
  },
  {
    id: 2,
    patientName: "SARATH ANNAN",
    doctorName: "Dr. ASHA BABU PS",
    date: "Today",
    time: "",
    caseType: "BELOW KNEE AMPUTATION",
    theatre: "CARDIO",
    status: "Cancelled",
  },
  {
    id: 3,
    patientName: "SREYA SARATHKUMAR",
    doctorName: "Dr. JOHN DOE",
    date: "Today",
    time: "11:30 AM",
    caseType: "LAPAROSCOPY",
    status: "Scheduled",
  },
];

function SurgeryList() {
  return (
    <div className="surgery-list">
      <h2>Upcoming Surgeries</h2>
      <div className="surgery-cards">
        {surgeries.map((surgery) => (
          <SurgeryCard
            key={surgery.id}
            patientName={surgery.patientName}
            doctorName={surgery.doctorName}
            date={surgery.date}
            time={surgery.time}
            caseType={surgery.caseType}
            status={surgery.status}
          />
        ))}
      </div>
    </div>
  );
}

export default SurgeryList;
