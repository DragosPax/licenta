import Reactm,{useState} from "react";
import { Link } from "react-router-dom";
import Homepage from "../assets/homepage.jpg";
import ProduseNoi from "../components/ProduseNoi";
import Cookie from '../components/Cookie'
import Search from '../components/Search'
import ProductsData from '../ProductsData.json'

import "../styles/Home.css";

function Home() {

  const [openCookie,setOpenCookie]= useState(true)

  return (
    <div className="home">
      <Search placeholder='Cautati in meniu...' data={ProductsData}/>
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
    
       { openCookie &&  <Cookie setOpenCookie={setOpenCookie}/>}
    </div>
  );
}

export default Home;
