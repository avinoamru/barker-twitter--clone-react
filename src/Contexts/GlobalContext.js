import React, { createContext, useEffect, useState } from "react";

// const getBarksUrl = "https://bark-api.herokuapp.com/"
const getBarksUrl = "http://localhost:9090/";

const getBarks = async () => {
  const res = await fetch(getBarksUrl);
  const data = await res.json();
  const barks = await data;
  return barks;
};

export const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [barks, setBarks] = useState([]);

  useEffect(() => {
    getBarks().then((barks) => setBarks(barks));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        BarksContext: [barks, setBarks],
        fetchBarks: getBarks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
