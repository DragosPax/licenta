import React from "react";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Tripadvisor from "../assets/tripadvisor.png";
import Phone from "../assets/phone.png";
import "../styles/NavbarTop.css";

function NavbarTop() {
  return (
    <div className="top-nav">
      <div className="social-links">
        <img
          style={{ borderRadius: "25%" }}
          src={Facebook}
          alt="facebook"
          onClick={() => {
            window.open("http://facebook.com", "_blank");
          }}
        />
        <img
          src={Instagram}
          alt="instagram"
          onClick={() => {
            window.open("http://instagram.com", "_blank");
          }}
        />
        <img
          src={Tripadvisor}
          alt="tripadivsor"
          onClick={() => {
            window.open("http://tripadvisor.com", "_blank");
          }}
        />
      </div>
      <div className="phone">
        <img src={Phone} alt="phone" />
        <p className="phone-number">0742587713</p>
      </div>
    </div>
  );
}

export default NavbarTop;
