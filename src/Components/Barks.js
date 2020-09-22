import React, {useState,useEffect} from "react"
import {Bark} from "./Bark";

const fetchUrl = "https://bark-api.herokuapp.com/"
const barkUrl = "https://bark-api.herokuapp.com/bark/"

const getBarks = async() =>{
  let res = await fetch(fetchUrl)
  const barksData =await res.json()
  return barksData

}

export const Barks = () =>{
  const [barks, setBarks] = useState([])

  useEffect( ()=>{
    getBarks().then((data)=>{
setBarks(data.reverse())
    })

  },[])  


  const deleteBark =  event =>{
    event.preventDefault()
    const {target}= event
    const targetId = target.parentNode.getAttribute("id");
    const deleteUrl = barkUrl.concat(targetId)
    fetch(deleteUrl,{method:"delete"}).then(()=>{
      getBarks().then(data=>{
        setBarks(data.reverse())
      })
      
    })

    
    
}




  return (
    <div className = "barks">
      {barks.map(bark=>(
        <Bark key = {bark._id} id={bark._id} name = {bark.name} content = {bark.content} deleteHandler = {deleteBark}></Bark>
      ))}

    </div>
  )

}