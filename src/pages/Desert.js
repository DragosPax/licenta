import React from "react";
// import "../styles/Desert.css";
import Main from "../assets/desert/main.jpg";
import { DesertList } from "../helpers/DesertList";
import DesertItem from "../components/DesertItem";


function Desert() {
  return (
    <div className="product-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>DESERT</h1>
      </div>

      <div className="product-list">
        {DesertList.map((desertItem, key) => {
          return (
            <DesertItem
              key={key}
              desertItem={desertItem}
						
            />
          );
        })}
      </div>
    </div>
  );
}

export default Desert;
