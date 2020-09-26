/*import React, { createContext, useContext } from "react";
import {BarksContext} from './BarksContext'
import Bark from '../Components/Bark'
export const FetchCommsContext = createContext();

export const FetchCommsContextProvider = (props => {

const Barks = useContext(BarksContext)[0]

  const getBarksUrl = "";
  const postBarkUrl = "";

  const CommsFunctions = {
    getBarks: async () => {
      try {
        const res = await fetch(getBarksUrl);
        const data = await res.json()
        return data;
      } catch (err) {
        console.log(err);
      }
    },

    showBarks: async () => {
      Barks.map(bark => {
        return (
          <Bark name={bark.name} content={bark.content} id={bark.id} />
        );
      })
    },

    deleteBark: (id = "") => {
      const deleteBarksUrl = postBarkUrl.concat(id);


    }

  };



  return (
    <FetchCommsContext.Provider value={CommsFunctions}>
      {props.children}
    </FetchCommsContext.Provider>
  );
}); */