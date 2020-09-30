import React, { useContext } from "react";

import { BarksContext } from "../Contexts/GlobalContext";
import Bark from "./Bark";
const Barks = () => {
  const [barks,dispatch] = useContext(BarksContext); // only the barks list, I don't need the setBarks function

  return (
    <div className="barks content ">
      {barks.map(({ _id, name, content }) => (
        <Bark key={`${_id}`} id={_id} name={name} content={content} />
      ))}
    </div>
  );
};

export default Barks;
