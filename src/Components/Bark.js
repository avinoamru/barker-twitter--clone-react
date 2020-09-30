import React, { useContext } from "react";
import { BarksContext } from "../Contexts/GlobalContext";

const deleteBarkUrl = "https://bark-api.herokuapp.com/bark/";

const Bark = ({ id, name, content }) => {
  const [barks, barksDispatch] = useContext(BarksContext);

  const deleteBark =  (e) => {
   e.preventDefault()

   fetch(deleteBarkUrl.concat(id),{
     method:"delete"
   }).then(()=>{
    barksDispatch({
      type: "DELETE-BARK",
      payload: id
    })
   })

   
  };

  return (
    <div className="bark">
      <h3>{name}</h3>
      <h3>{content}</h3>
      <button className="button " onClick={deleteBark}>X</button>
    </div>
  );
};

export default Bark;
