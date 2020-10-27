import React, { useState, useEffect } from "react";
import interrocacao from "../images/interrogação.webp"

const Card = ({
  id,
  imagem,
  cartasSelecionadas,
  definirCartasSelecionadas,
  cartasCorretas,
}) => {
  // const [cardName, setCardName] = useState[pessoa];
  const [isFlip, setFlip] = useState(false);
  useEffect(() => {
    if (cartasSelecionadas.indexOf(id) >= 0 || cartasCorretas.indexOf(id) >= 0) {
      setFlip(true);
      return;
    }

    setFlip(false);
  }, [cartasSelecionadas, cartasCorretas]);

  function handleClick(element) {
    let carta = element.getAttribute("id");

    definirCartasSelecionadas((currentState) => [...currentState, carta]);
  }

  let classeIsFlip = isFlip ? "flip" :  "";

  let classeHide = isFlip ? "hide" :  "";

  return (
    <div id={id} className={`carta ${classeIsFlip}`} onClick={(e) => handleClick(e.target)}>
      <div className={`back-face ${classeHide}`}>
        <img src={interrocacao} height="100%" alt=""/>
      </div>
      <div className="front-face">
        <img src={`${process.env.PUBLIC_URL}${imagem}`} height="100%" alt=""/>
      </div>
    </div>
  );
};

export default Card;
