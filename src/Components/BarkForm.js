import React, { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

const postBarkUrl = "https://bark-api.herokuapp.com/bark"
// const postBarkUrl = "http://localhost:9090/bark";

const BarkForm = () => {
  const [barks, setBarks] = useContext(GlobalContext).BarksContext;
  const getBarks = useContext(GlobalContext).fetchBarks;

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

    fetch(postBarkUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBark),
    }).then(() => {
      getBarks().then((barks) => {
        setBarks(barks.reverse());
      });

    })

    setName("");
    setContent("");
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
