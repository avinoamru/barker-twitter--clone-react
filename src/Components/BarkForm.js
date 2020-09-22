import React, {useState,useEffect} from 'react'
const barkUrl = "https://bark-api.herokuapp.com/bark"
export const BarkForm = () =>{
  const [name,setName] = useState("")
  const [content,setContent] = useState("")

  const nameHandler = (e) =>{
    e.preventDefault()
    const {value} = e.target
    setName(value)

  }

  const contentHandler = (e) =>{
    e.preventDefault()
    const {value} = e.target
    setContent(value)

  }


  const submitBark = (e) =>{
    e.preventDefault()

    const bark = {
      "name":name.toString(),
        "content": content.toString()
    }



    fetch(barkUrl,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(bark)

    
    }).then(res=>{
      return res.json().then(()=>{
        console.log("Posted Bark")
      })
    }).catch(err=>console.log(err))


  }

  return (
    <form action="POST" className="bark-form">
      <label>Name</label>
      <input name = "name" onChange ={nameHandler} ></input>
      <label>Content</label>
      <input name="content" onChange ={contentHandler}></input>
      <button type="submit" onClick={submitBark}>Send Bark <span role="img" aria-label="1">🐶</span></button>
    </form>
  )
}
