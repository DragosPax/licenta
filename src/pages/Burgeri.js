import React from "react";
import "../styles/Burgeri.css";
import Main from "../assets/burgeri/main.jpg";
import { BurgeriList } from "../helpers/BurgeriList";
import BurgeriItem from "../components/BurgeriItem";


function Burgeri() {
  return (
    <div className="burgeri-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>BURGERI</h1>
      </div>

      <div className="burgeri-list">
        {BurgeriList.map((burgeriItem, key) => {
          return (
            <BurgeriItem
              key={key}
              image={burgeriItem.image}
              name={burgeriItem.name}
              description={burgeriItem.description}
              price={burgeriItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Burgeri;
