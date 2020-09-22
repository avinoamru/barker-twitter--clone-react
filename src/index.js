import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BarksContextProvider } from './Contexts/BarksContext'

ReactDOM.render(
  <React.StrictMode>
    <BarksContextProvider>
      <App />
    </BarksContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

