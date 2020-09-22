import React ,{createContext, useContext } from "react"

export const BarkContext = createContext("Tchbgovnkl")


export const useBark = ()=>{
 return useContext(BarkApiContext)
}



export const BarkApiContext = ({children})=>{


  return (
    <BarkContext.Provider>
      {children}
    </BarkContext.Provider>
  )
}