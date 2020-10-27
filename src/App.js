import React from "react";

import SlideRoutes from "react-slide-routes";
import { Route, useLocation } from "react-router-dom";

import FelizAniversario from "./pages/FelizAniversario.jsx";
import Depoimentos from "./pages/Depoimentos.jsx";
import Jogo from "./pages/Jogo.jsx";

function App() {
  let location = useLocation();
  return (
    <SlideRoutes location={location}>
      <Route
        exact
        path={`${process.env.PUBLIC_URL}/`}
        component={FelizAniversario}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/depoimentos`}
        component={Depoimentos}
      />
      <Route path={`${process.env.PUBLIC_URL}/jogo`} component={Jogo} />
    </SlideRoutes>
  );
}

export default App;
