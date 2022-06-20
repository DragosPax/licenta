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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const notify = () =>
    toast.success("Produs adaugat", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1000,
    });

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    notify();
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
   
  };

  return (
    <div className="App">
      <Router>
        <NavbarTop />
        <Navbar
          countCartItems={cartItems.length}
          setShowBasket={setShowBasket}
        />
        <Categories />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza onAdd={onAdd} />} />
          <Route path="/paste" element={<Paste onAdd={onAdd} />} />
          <Route path="/burgeri" element={<Burgeri onAdd={onAdd} />} />
          <Route path="/desert" element={<Desert onAdd={onAdd} />} />
          <Route path="/bauturi" element={<Bauturi onAdd={onAdd} />} />
          <Route path="/despre" element={<Despre onAdd={onAdd} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gdpr" element={<Gdpr />} />
        </Routes>
        {showBasket && (
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
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
