import { Block, DocumentScannerTwoTone } from "@mui/icons-material";
import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import "../styles/Footer.css";

function Footer() {
  function abonare() {
    const email = document.getElementById("email");
    console.log(email.value); //PERSISTARE LOCAL STORAGE
    document.getElementById("email").value = "V-ati abonat cu succes!";
  }

  return (
    <div className="footer">
      <img
        src={Logo}
        alt="logo"
        className="logo"
        onClick={() => {
          window.location.href = "/";
        }}
      />

      <div className="contact">
        <h2>Contact</h2>
        <p>E: comenzi@restaurant.com</p>
        <p>T: 0742587713</p>
        <p>A: Soseaua Nationala nr. 48 Iasi</p>
      </div>
      <div className="newsletter">
        <label htmlFor="email" className="label">
          Abonare Newsletter
        </label>
        <input type="email" id="email" placeholder="Introduceti email" />
        <button className="abonare" onClick={abonare}>
          Abonati-va
        </button>
      </div>
    </div>
  );
}

export default Footer;
