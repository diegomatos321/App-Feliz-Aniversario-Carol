import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./css/reset.css";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <div className="App">
    <BrowserRouter basename="/feliz-aniversario">
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
