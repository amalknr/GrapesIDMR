import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <AiOutlineHome size={24} />
        <p>Home</p>
      </div>
      <div className="footer-item">
        <FiActivity size={24} />
        <p>Activity</p>
      </div>
      <div className="footer-item">
        <MdOutlineSettings size={24} />
        <p>Settings</p>
      </div>
    </footer>
  );
}

export default Footer;
