import React, { createContext, useEffect, useState } from 'react'

const getBarksUrl = "https://bark-api.herokuapp.com/"
const getBarks = async () => {
  const res = await fetch(getBarksUrl)
  const data = await res.json()
  const barks = await data
  return barks
}

export const BarksContext = createContext();

export const BarksContextProvider = ({ children }) => {
  const [barks, setBarks] = useState([{}])
  useEffect(() => {
    getBarks().then(barks => setBarks(barks))
  }, [])

  return (
    <BarksContext.Provider value={[barks, setBarks]}>
      {children}
    </BarksContext.Provider>
  )
}