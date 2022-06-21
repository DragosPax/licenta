import React from "react";
// import "../styles/Burgeri.css";
import Main from "../assets/burgeri/main.jpg";
import { BurgeriList } from "../helpers/BurgeriList";
import BurgeriItem from "../components/BurgeriItem";


function Burgeri() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>BURGERI</h1>
      </div>

      <div className="product-list">
        {BurgeriList.map((burgeriItem, key) => {
          return (
            <BurgeriItem
              key={key}
              burgeriItem={burgeriItem}
							
            />
          );
        })}
      </div>
    </div>
  );
}

export default Burgeri;
