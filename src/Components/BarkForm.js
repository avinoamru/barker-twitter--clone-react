import React, { useContext, useState } from "react";
import { GlobalContext } from "../Contexts/GlobalContext";

// const postBarkUrl = "https://bark-api.herokuapp.com/bark"
const postBarkUrl = "http://localhost:9090/bark";

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
    });
    getBarks().then((barks) => {
      setBarks(barks);
    });

    setName("");
    setContent("");
  };

  return (
    <form action="POST" onSubmit={submitHandler}>
      <label name="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={nameHandler}
        required
        autoComplete="off"
      />
      <label name="content">Bark</label>
      <input
        type="text"
        value={content}
        onChange={contentHandler}
        required
        autoComplete="off"
      />

      <button type="submit" name="submit-bark">
        Send
        <span aria-label="1" role="img">
          🐶
        </span>
      </button>
    </form>
  );
};

export default BarkForm;
