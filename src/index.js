import { StrictMode } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./css/reset.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <div className="App">
    <StrictMode>
      <BrowserRouter basename="/feliz-aniversario">
        <App />
      </BrowserRouter>
    </StrictMode>
  </div>,
  document.getElementById("root")
);
