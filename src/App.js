import React, { useEffect } from "react";

import SlideRoutes from "react-slide-routes";
import { Route, useLocation } from "react-router-dom";

import FelizAniversario from "./pages/FelizAniversario.jsx";
import Depoimentos from "./pages/Depoimentos.jsx";
import Jogo from "./pages/Jogo.jsx";
import useAudio from "./utils/useAudio.js";

function App() {
  let location = useLocation();
  let [isPlaying, setIsPlaying] = useAudio({
    src: `${process.env.PUBLIC_URL}/audio/audio-parabens.mp3`,
    volume: 0.05,
    loop: true,
  });
  useEffect(() => {
    document.addEventListener("click", () => setIsPlaying(true));
    return document.removeEventListener("click", () => setIsPlaying(true));
  }, []);

  return (
    <SlideRoutes location={location}>
      <Route exact path="/" component={FelizAniversario} />
      <Route path="/depoimentos" component={Depoimentos} />
      <Route path="/jogo" component={Jogo} />
    </SlideRoutes>
  );
}

export default App;
