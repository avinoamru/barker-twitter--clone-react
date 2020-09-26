import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

const deleteBarkUrl = "https://bark-api.heroku.com/bark/";

const Bark = ({ id, name, content }) => {
  const [barks, setbarks] = useContext(GlobalContext).BarksContext;

  const deleteBark = async () => {
    console.log(id);
    const deletedBark = await fetch(deleteBarkUrl.concat(id), {
      method: "DELETE",
    });
    const deletedBarkData = await deletedBark.json();
    setbarks(barks.filter(({ _id }) => _id !== id));
    console.log(deletedBarkData);
  };

  return (
    <div className="bark">
      <h3>{name}</h3>
      <h3>{content}</h3>
      <button className="button is-danger" onClick={deleteBark}>X</button>
    </div>
  );
};

export default Bark;
