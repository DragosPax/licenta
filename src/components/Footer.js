
import React,{useState} from "react";
import LogoWhite from "../assets/logo_white.png";
import Cookie from './Cookie'

import "../styles/Footer.css";

function Footer() {
  const [openCookie,setOpenCookie]= useState(true)
  function abonare() {
    const email = document.getElementById("email").value;
    console.log(email);
     //PERSISTARE LOCAL STORAGE
    let emails
    if(localStorage.getItem('emails')===null)
    emails=[];
    else 
    emails=JSON.parse(localStorage.getItem('emails'))
    emails.push(email)
    localStorage.setItem('emails',JSON.stringify(emails))

    document.getElementById("email").value = "V-ati abonat cu succes!";
  }

  return (
    <>
    <div className="footer">
      <img
        src={LogoWhite}
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
     { openCookie &&  <Cookie setOpenCookie={setOpenCookie}/>}
  </>);
  
}

export default Footer;
