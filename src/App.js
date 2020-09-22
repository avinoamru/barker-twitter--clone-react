import React  from 'react';
import './App.css';
import {BarkContext} from './Contexts/BarkContext'
import {Barks} from "./Components/Barks"
import {BarkForm} from './Components/BarkForm'

function App() {

  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <BarkContext.Provider>
    <BarkForm></BarkForm>
    <Barks/>
    </BarkContext.Provider>
    </div>
  );
}

export default App;
