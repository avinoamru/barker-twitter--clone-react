import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";

import { BarksContextProvider } from "./Contexts/GlobalContext";

ReactDOM.render(
    <BarksContextProvider>
      <App />
    </BarksContextProvider>,
  document.getElementById("root")
);
