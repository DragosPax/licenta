import React from "react";
import "../styles/Paste.css";
import Main from "../assets/paste/main.jpg";
import { PasteList } from "../helpers/PasteList";
import PasteItem from "../components/PasteItem";


function Paste() {
  return (
    <div className="paste-wrapper">
      <div className="head" style={{ backgroundImage: `url(${Main})` }}>
        <h1>PASTE</h1>
      </div>

      <div className="paste-list">
        {PasteList.map((pasteItem, key) => {
          return (
            <PasteItem
              key={key}
              image={pasteItem.image}
              name={pasteItem.name}
              description={pasteItem.description}
              price={pasteItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Paste;
