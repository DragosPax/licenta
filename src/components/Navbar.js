import React, { useState } from "react";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Cart from "../assets/cart.svg";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  // const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="main-nav">
        <Link to="/">
          <img src={Logo} alt="logo" className="left-side" />
        </Link>
        <div className="center-side">
          <Link className="link" to="/">
            ACASA
          </Link>
          <Link className="link" to="/despre">
            DESPRE
          </Link>
          <Link className="link" to="/contact">
            CONTACT
          </Link>
        </div>
        <div className="right-side">
          <div
            className="conectare"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img
              style={{ cursor: "pointer" }}
              src={User}
              alt="user"
              className="toggle-hide"
            />
            <p style={{ cursor: "pointer" }} className="toggle-hide">
              Conectare
            </p>
          </div>
          
          <div className="cart">
            <img src={Cart} alt="cart" className="cart-image" />
            <p className="cart-p">Cosul tau</p>
            <p className="cart-number">0</p>
          </div>
        </div>
      </div>
      {openModal&&<Modal setOpenModal={setOpenModal} />}
    </div>
  );
}

export default Navbar;
