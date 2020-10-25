import React from 'react';

import { BrowserRouter, Switch, Route} from "react-router-dom";

import BoasVindas from "./pages/BoasVindas.jsx";
import FelizAniversario from "./pages/FelizAniversario.jsx";
import Depoimentos from "./pages/Depoimentos.jsx";
// import Jogo from "./pages/Jogo.jsx";

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <BoasVindas />
            </Route>
            <Route exact path="/feliz-aniversario">
              <FelizAniversario />
            </Route>
            <Route path="/depoimentos">
              <Depoimentos />
            </Route>
            <Route path="/jogo">
              {/* <Jogo /> */}
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
