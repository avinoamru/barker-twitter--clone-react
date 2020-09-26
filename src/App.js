import React from "react";
import "./App.css";
import Barks from "./Components/Barks";
import BarkForm from "./Components/BarkForm";

const App = () => {
  return (
    <div className="App">
      <h1 className="title ">Barker Twitter For Dogs</h1>
      <main>
      <BarkForm />
      <Barks />
      </main>
    </div>
  );
};
export default App;
