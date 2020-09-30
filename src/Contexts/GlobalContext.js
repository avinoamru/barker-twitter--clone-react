import React, { createContext, useEffect, useReducer, useState } from "react";

const getBarksUrl = "https://bark-api.herokuapp.com/"


export const BarksContext = createContext();

const reducer = (state, {type,payload}) =>{
  switch (type){
    case "GET-BARKS":
          return state = payload.reverse()

    case "POST-BARK":
       return state = [ payload,...state]
      
     
     case "DELETE-BARK":
         
      return state = state.filter(({_id})=> _id !== payload)
        
      
    default:
      return state;


  }

}

const fetchBarks = async ()=>{
  const resJson = await (await fetch(getBarksUrl)).json()
  const data = await resJson
  return data
}




export const BarksContextProvider = ({ children }) => {
  const [barks, barksDispatch] = useReducer(reducer,[]);

  useEffect(()=>{
    fetchBarks().then(data=>barksDispatch({
      type: "GET-BARKS",
      payload: data
    }))}

  ,[])

    console.log(barks)
  return (
    <BarksContext.Provider value={[barks,barksDispatch]}>
      {children}
    </BarksContext.Provider>
  );
};
