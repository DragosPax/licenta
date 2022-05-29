import React from "react";
import { Link } from "react-router-dom";
import Homepage from "../assets/homepage.jpg";
import ProduseNoi from "../components/ProduseNoi";
import CookieConsent from "react-cookie-consent";
import Cookie from '../components/Cookie'

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div
        className="header-container"
        style={{ backgroundImage: `url(${Homepage})` }}
      >
        <div className="try">
          <h1>The Restaurant</h1>
          {/* <p>Un Restaurant pe gustul tuturor!</p> */}
          <Link to="/pizza">
            <button>COMANDA</button>
          </Link>
        </div>
      </div>
      <ProduseNoi />
    
      <Cookie/>
    </div>
  );
}

export default Home;
