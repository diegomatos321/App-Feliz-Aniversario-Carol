import { useState, useMemo, useEffect, cloneElement } from "react";
import { withRouter } from "react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import FelizAniversario from "./pages/FelizAniversario.jsx";
import Depoimentos from "./pages/Depoimentos.jsx";
import Jogo from "./pages/Jogo.jsx";
import Footer from "./components/Footer.jsx";

import useAudio from "./utils/useAudio.js";
import usePageDirection from "./utils/usePageDirection.js";
import { AppContext } from "./utils/AppContext.js";

import "./css/app.css";

const routes = [
  { path: "/", Component: FelizAniversario },
  { path: "/depoimentos", Component: Depoimentos },
  { path: "/jogo", Component: Jogo },
];

const App = () => {
  let [isBackgroundMusicPlaying, setBackgroundMusicPlaying] = useAudio({
    src: `${process.env.PUBLIC_URL}/audio/audio-parabens.mp3`,
    volume: 0.05,
    loop: true,
  });

  const [isFooterEnable, setFooterEnable] = useState(true);
  const [nextPage, setNextPage] = useState("");

  const pageDirection = usePageDirection();
/*   const [slideClassName, setSlideClassName] = useState("slider-router-from-right");
  useEffect(() => {
    const newClassName = pageDirection === "forward" ? "slider-router-from-right" : "slider-router-from-left"
    console.log(newClassName)
    setSlideClassName(newClassName)
  }, [pageDirection]) */

  const contextValue = useMemo(() => {
    return {
      isBackgroundMusicPlaying,
      setBackgroundMusicPlaying,
      isFooterEnable,
      setFooterEnable,
      nextPage,
      setNextPage,
    };
  }, [
    isBackgroundMusicPlaying,
    setBackgroundMusicPlaying,
    isFooterEnable,
    setFooterEnable,
    nextPage,
    setNextPage,
  ]);

  /* return (
    <TransitionGroup
      component={null}
      childFactory={(child) => {
        let newClassName = "";
        if (location.state) {
          newClassName = location.state.slideAnimation
        }
        console.log(newClassName)
        return cloneElement(child, {classNames: newClassName})
      }}
    >
      <CSSTransition
        key={location.key}
        timeout={1000}
        classNames={location.state ? location.state.slideAnimation : ""}
        mountOnEnter={false}
        unmountOnExit={true}
      >
        <AppContext.Provider value={contextValue}>
            <Switch location={location}>
              <Route exact path="/">
                <FelizAniversario />
              </Route>
              <Route path="/depoimentos">
                <Depoimentos />
              </Route>
              <Route path="/jogo">
                <Jogo />
              </Route>
            </Switch>
          <Footer />

        </AppContext.Provider>
      </CSSTransition>
    </TransitionGroup>
  ); */

  return (
    <AppContext.Provider value={contextValue}>
      {routes.map(({path, Component}) => (
        <Route key={path} exact path={path}>
          {({history, match}) => {
            return (
            <CSSTransition
            in={match != null}
            timeout={1000}
            classNames={history.location.state ? history.location.state.slideAnimation : ""}
            unmountOnExit
            mountOnEnter={false}
            unmountOnExit={true}
          >
              <Component />
          </CSSTransition>
          )}}
        </Route>
      ))}
      <Footer/>
    </AppContext.Provider>
  )
};

export default App;
