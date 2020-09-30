import React, { useContext, useState } from "react";
import { BarksContext } from "../Contexts/GlobalContext";

const barkUrl = "https://bark-api.herokuapp.com/bark/";

const BarkForm = () => {
  const [barks, barksDispatch] = useContext(BarksContext);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const nameHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setName(value);
  };

  const contentHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setContent(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBark = {
      name,
      content,
    };

    fetch(barkUrl,{
      method:"post",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBark)
    }).then(res=>res.json().then(postedBark=>barksDispatch({
      type:"POST-BARK",
      payload: postedBark
    })))

    


    setName("")
    setContent("")

    
  };

  return (
    <form className="hero" action="POST" onSubmit={submitHandler}>
      <label className="label" name="name">
        Name
        </label>
      <input
        className="input"
        type="text"
        value={name}
        onChange={nameHandler}
        required
        autoComplete="off"
      />

      <label className="label" name="content">
        Bark
        </label>
      <input
        className="input"
        type="text"
        value={content}
        onChange={contentHandler}
        required
        autoComplete="off"
      />
      <br></br>
      <br></br>
      <button className="button is-info is-light is-medium" type="submit" id="submit-bark">
        Send
          <span aria-label="1" role="img">
          🐶
          </span>
      </button>
    </form>
  );
};

export default BarkForm;
