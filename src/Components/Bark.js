import React, { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

const deleteBarkUrl = "https://bark-api.herokuapp.com/bark/";
const fetchBarks = "https://bark-api.herokuapp.com/";

const Bark = ({ id, name, content }) => {
  const [barks, setbarks] = useContext(GlobalContext).BarksContext;

  const deleteBark =  (e) => {
   e.preventDefault()
    let deletedBarkUrl = deleteBarkUrl.concat(id)
   console.log(deletedBarkUrl)
   fetch(deletedBarkUrl,{
     method:"DELETE"
   }).then(()=>{
     fetch(fetchBarks).then(res=>res.json()).then(data=>{
       setbarks(data)
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
