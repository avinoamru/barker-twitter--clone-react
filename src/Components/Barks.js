import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";
import Bark from "./Bark";
const Barks = () => {
  const barks = useContext(GlobalContext).BarksContext[0]; // only the barks list, I don't need the setBarks function

  return (
    <div className="barks content ">
      {barks.map(({ _id, name, content }) => (
        <Bark key={`${_id}`} id={_id} name={name} content={content} />
      ))}
    </div>
  );
};

export default Barks;
