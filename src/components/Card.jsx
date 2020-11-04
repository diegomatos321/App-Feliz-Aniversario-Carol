import { useState, useEffect } from "react";
import cartaPNG from "../images/carta.png"
import cartaWebp from "../images/carta.webp"

import "../css/card.css"

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
    if (cartasSelecionadas.indexOf(String(id)) >= 0 || cartasCorretas.indexOf(String(id)) >= 0) {
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
        <picture>
          <source srcSet={cartaWebp} type="image/webp"/>
          <img src={cartaPNG} height="100%" alt="Verso da Carta"/>
        </picture>
      </div>
      <div className="front-face">
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}${imagem}.webp`} type="image/webp"/>
          <img src={`${process.env.PUBLIC_URL}${imagem}.png`} height="100%" alt="Frente da Carta"/>
        </picture>
      </div>
    </div>
  );
};

export default Card;
