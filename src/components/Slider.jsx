import { useState, useEffect, useRef, useCallback } from "react";
import SetaPNG from "../images/seta.png"
import SetaWebp from "../images/seta.webp"

import "../css/slider.css"

const Slider = ({ onEnd, children }) => {
  const [slideAtual, definirSlideAtual] = useState(0);
  const [responsiveContainerHeight, definirResponsiveContainerHeight] = useState(0);
  const [touchState, setTouchState] = useState("");
  const [touchList, setTouchList] = useState([]);
  // const sliderRef = useRef(null)

  useEffect(() => {
    calcularAlturaDoSlide();
    window.addEventListener("resize", calcularAlturaDoSlide);
    return () => {
      window.removeEventListener("resize", calcularAlturaDoSlide);
    }
  }, [])

  const sliderRef = useCallback(node => {
    if (node != null ) {
      node.addEventListener("touchstart", (e) => handleGestureStart(e), true);
      node.addEventListener("touchmove", (e) => handleGestureMove(e), true)
      node.addEventListener("touchcancel", (e) => handleGestureCancel(e), true)
      node.addEventListener("touchend", (e) => handleGestureEnd(e), true)  
    }

    return () => {
        node.removeEventListener("touchstart", (e) => handleGestureStart(e));
        node.removeEventListener("touchmove", (e) => handleGestureMove(e));
        node.removeEventListener("touchcancel", (e) => handleGestureCancel(e));
        node.removeEventListener("touchend", (e) => handleGestureEnd(e));  
    }
  }, [])

  function calcularAlturaDoSlide (){
    let containerHeight = document.getElementsByClassName("slide-wrapper")[0].clientHeight;
    definirResponsiveContainerHeight(containerHeight); 
  }

  function handleGesture (event) {
    let currentTouches = [];

    if(event.targetTouches) {
      // Prefer Touch Events
      for (let i=0; i < event.targetTouches.length; i++) {
        const {clientX} = event.targetTouches[i];
        currentTouches.push(clientX);
      }
    } else {
      // Either Mouse event or Pointer Event
      currentTouches.push(event.clientX);
      currentTouches.push(event.clientY);
    }

/*     for (let i=0; i < event.targetTouches.length; i++) {
      const {clientX} = event.targetTouches[i];
      currentTouches.push(clientX);
    } */

    setTouchList((currentTouchList) => [...currentTouchList, ...currentTouches]);
  }

  function handleGestureStart(event) {
    // event.preventDefault();
    console.log("pointerdown")

    setTouchState("touchstart");

    handleGesture(event);
  }

  function handleGestureMove(event) {
    // event.preventDefault();
    setTouchState("touchmove");
    handleGesture(event);
  }

  function handleGestureCancel(event) {
    // event.preventDefault();
    setTouchState("touchcancel");
  }

  function handleGestureEnd(event) {
    // event.preventDefault();
    setTouchState("touchend");
  }

  useEffect(() => {
    if (touchState === "touchend") {
      if (touchList[touchList.length - 1] - touchList[0] < 0) {
        handleSlideChange("posterior");
        console.log("posterior");
      } else if (touchList[touchList.length - 1] - touchList[0] > 0) {
        handleSlideChange("anterior")
        console.log("anterior");
      }
      setTouchList([])
    }

    if (touchState === "touchcancel") {
      setTouchList([])
    }
  }, [touchState])

  function handleSlideChange(trocarSlide) {
    console.log("Slide Change")
    if (trocarSlide === "posterior" && slideAtual < children.length - 1) {
      definirSlideAtual(slideAtual + 1);
    } else if (trocarSlide === "anterior" && slideAtual > 0) {
      definirSlideAtual(slideAtual - 1);
    }
  }

  useEffect(() => {
    if (slideAtual === children.length-1) {
      onEnd();
    }
  }, [slideAtual])

  let transformCalc = `translateX(-${slideAtual * 100}%)`

  let activeAnteriorSetaClass = "active";
  let activePosteriorSetaClass = "active";

  if (slideAtual === 0) {
    activeAnteriorSetaClass = "";
  }

  if (slideAtual === children.length - 1) {
    activePosteriorSetaClass = "";
  }

  return (
    <div className="slide-container" ref={sliderRef} style={{height: responsiveContainerHeight}}>
      <div className={`slide-anterior ${activeAnteriorSetaClass}`} onClick={() =>handleSlideChange("anterior")}>
        <picture>
          <source srcSet={SetaWebp} type="image/webp"/>
          <img width="40px" src={SetaPNG} alt="Slide Anterior"/>
        </picture>
      </div>
      <div className="slide-wrapper" style={{transform: transformCalc}}>
        {children.map((slide, index) => {
          let activeSlideClass = "";
          if (index === slideAtual) {
            activeSlideClass = "active";
          }

          return <div key={slide.key} className={`slider ${activeSlideClass}`}>{slide}</div>;
        })}
      </div>
      <div className={`slide-posterior ${activePosteriorSetaClass}`} onClick ={() => handleSlideChange("posterior")}>
      <picture>
          <source srcSet={SetaWebp} type="image/webp"/>
          <img width="40px" src={SetaPNG} alt="Slide Posterior"/>
        </picture>
      </div>
    </div>
  );
};

export default Slider;
