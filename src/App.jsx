import { useState, useMemo } from "react";
import { Route, useLocation  } from "react-router-dom";

import FelizAniversario from "./pages/FelizAniversario.jsx";
import Depoimentos from "./pages/Depoimentos.jsx";
import Jogo from "./pages/Jogo.jsx";
import Footer from "./components/Footer.jsx";
import SlideRoutes from 'react-slide-routes';

import useAudio from "./utils/useAudio.js";
import { AppContext } from "./utils/AppContext.js";


const App = () => {
  const location = useLocation();

  let [isBackgroundMusicPlaying, setBackgroundMusicPlaying] = useAudio({
    src: `${process.env.PUBLIC_URL}/audio/audio-parabens.mp3`,
    volume: 0.05,
    loop: true,
  });

  const [isFooterEnable, setFooterEnable] = useState(true);
  const [nextPage, setNextPage] = useState("");

  const contextValue = useMemo(() => {
    return {
      isBackgroundMusicPlaying,
      setBackgroundMusicPlaying,
      isFooterEnable,
      setFooterEnable,
      nextPage,
      setNextPage
    };
  }, [
    isBackgroundMusicPlaying,
    setBackgroundMusicPlaying,
    isFooterEnable,
    setFooterEnable,
    nextPage,
    setNextPage
  ]);

  return (
    <AppContext.Provider value={contextValue}>
        <SlideRoutes location={location} duration={600}>
          <Route exact path="/" component={FelizAniversario}/>
          <Route path="/depoimentos" component={Depoimentos}/>
          <Route path="/jogo" component={Jogo}/>
        </SlideRoutes>
      <Footer/>
    </AppContext.Provider>
  )
};

export default App;
