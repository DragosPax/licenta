import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarTop from "./components/NavbarTop";
import Categories from './components/Categories'
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Paste from "./pages/Paste";
import Burgeri from "./pages/Burgeri";
import Desert from "./pages/Desert"
import Bauturi from "./pages/Bauturi"
import Despre from './pages/Despre'
import Contact from './pages/Contact'
import Copyright from './components/Copyright'
import Gdpr from './pages/Gdpr'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarTop />
        <Navbar />
        <Categories/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza/>}/>
          <Route path="/paste" element={<Paste/>}/>
          <Route path="/burgeri" element={<Burgeri/>}/>
          <Route path="/desert" element={<Desert/>}/>
          <Route path="/bauturi" element={<Bauturi/>}/>
          <Route path="/despre" element={<Despre/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gdpr" element={<Gdpr/>}/>
              
        </Routes>

        <Footer />
        <Copyright/>
      </Router>
    </div>
  );
}

export default App;
