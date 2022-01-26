import person from "../assets/ChibiGIF.gif";
import bg from "../assets/Lidl.png";
import bg2 from "../assets/Cafe.png";
import bg3 from "../assets/dorpje.png";

import { useEffect, useState } from "react";

const Walking = () => {
  const [stappen, setStappen] = useState(0);
  const [value, setValue] = useState(bg);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    document.getElementById("backdrop").addEventListener("scroll", (e) => {
      console.log("X", e.currentTarget.scrollLeft / 6.35);
      setStappen(Math.round(e.currentTarget.scrollLeft / 6.35));
    });
  }, [setStappen]);

 

  return (
    <div className='walking'>
      <div className="titel">
        <h1>Waar is mijn basisschool gebleven?</h1>
        <p>Gebaseerd op het Nederlandse gemiddelde.</p>
      </div>
      <div className="dropDownImage">
        <select value={value} onChange={handleChange}>
          <option value={bg}>Default</option>
          <option value={bg2}>Tweede image</option>
          <option value={bg3}>Derde image</option>
        </select>
      </div>
      <div className="scroll-wrapper">
        <div className="backdrop" id={"backdrop"}>
          <img src={value} alt="" />
        </div>
        <div className="person">
          <img src={person} alt="" />
        </div>
        <div className="step-range">
          {<div className="progress" style={{ width: `${stappen / 4}%` }} />}
        </div>
      </div>
      <div className="stappen">
        <span className={"s"}>{stappen}</span>&nbsp;<span>stappen</span>
      </div>
    </div>
  );
};

export default Walking;
