import { useState, useEffect } from "react";
import SetaPNG from "../images/seta.png"
import SetaWebp from "../images/seta.webp"

import "../css/slider.css"

const Slider = ({ onEnd, children }) => {
  const [slideAtual, definirSlideAtual] = useState(0);
  const [responsiveContainerHeight, definirResponsiveContainerHeight] = useState(0)

  useEffect(() => {
    calcularAlturaDoSlide();
    window.addEventListener("resize", calcularAlturaDoSlide)
    return () => window.removeEventListener("resize", calcularAlturaDoSlide)
  }, [])

  useEffect(() => {
    if (slideAtual === children.length-1) {
      onEnd();
    }
  }, [slideAtual])

  function calcularAlturaDoSlide (){
    let containerHeight = document.getElementsByClassName("slide-wrapper")[0].clientHeight;
    definirResponsiveContainerHeight(containerHeight); 
  }

  let transformCalc = `translateX(-${slideAtual * 100}%)`

  function handleSlideChange(trocarSlide) {
    if (trocarSlide === "posterior" && slideAtual < children.length - 1) {
      definirSlideAtual(slideAtual + 1);
    } else if (trocarSlide === "anterior" && slideAtual > 0) {
      definirSlideAtual(slideAtual - 1);
    }
  }

  let activeAnteriorSetaClass = "active";
  let activePosteriorSetaClass = "active";

  if (slideAtual === 0) {
    activeAnteriorSetaClass = "";
  }

  if (slideAtual === children.length - 1) {
    activePosteriorSetaClass = "";
  }

  return (
    <div className="slide-container" style={{height: responsiveContainerHeight}}>
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

          return <div key={slide.key} className={`slide ${activeSlideClass}`}>{slide}</div>;
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
