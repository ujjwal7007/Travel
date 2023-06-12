import React from "react";
import "./SelectStyle.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import Maldives3 from "../../assets/maldives3.jpg";
import Keywest from "../../assets/keywest.jpg";

import SelectImg from "../selectimg/SelectImg";

function Select() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectImg bgImg={BoraBora} text={"Bora Bora"} />
        <SelectImg bgImg={BoraBora2} text={"Emerald Bay"} />
        <SelectImg bgImg={Maldives} text={"Maldives"} />
        <SelectImg bgImg={Maldives2} text={"Grenada"} />
        <SelectImg bgImg={Maldives3} text={"Barbados"} />
        <SelectImg bgImg={Keywest} text={"Key West"} />
      </div>
    </div>
  );
}

export default Select;
