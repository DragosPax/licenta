import React from "react";
import "../styles/Desert.css";
import Main from "../assets/desert/main.jpg";
import { DesertList } from "../helpers/DesertList";
import DesertItem from "../components/DesertItem";


function Desert() {
  return (
    <div className="desert-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>DESERT</h1>
      </div>

      <div className="desert-list">
        {DesertList.map((desertItem, key) => {
          return (
            <DesertItem
              key={key}
              image={desertItem.image}
              name={desertItem.name}
              description={desertItem.description}
              price={desertItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Desert;
