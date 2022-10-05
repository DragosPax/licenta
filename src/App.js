import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarTop from "./components/NavbarTop";
import Categories from "./components/Categories";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Paste from "./pages/Paste";
import Burgeri from "./pages/Burgeri";
import Desert from "./pages/Desert";
import Bauturi from "./pages/Bauturi";
import Despre from "./pages/Despre";
import Contact from "./pages/Contact";
import Copyright from "./components/Copyright";
import Gdpr from "./pages/Gdpr";
import Basket from "./components/Basket";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  const [showBasket, setShowBasket] = useState(false);



  return (
    <div className="App">
      <Router>
        <NavbarTop />
        <Navbar
        
          setShowBasket={setShowBasket}
        />
        <Categories />

        <Routes>
          <Route path="/licenta" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/paste" element={<Paste/>} />
          <Route path="/burgeri" element={<Burgeri />} />
          <Route path="/desert" element={<Desert />} />
          <Route path="/bauturi" element={<Bauturi  />} />
          <Route path="/despre" element={<Despre  />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gdpr" element={<Gdpr />} />
        </Routes>
        {showBasket && (
          <Basket

            setShowBasket={setShowBasket}
          />
        )}
        <Footer />
        <Copyright />
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
