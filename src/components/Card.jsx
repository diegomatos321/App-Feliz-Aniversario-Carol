import React, { useState, useEffect } from "react";

const Card = ({
  name,
  cartasSelecionadas,
  definirCartasSelecionadas,
  cartasCorretas,
}) => {
  // const [cardName, setCardName] = useState[pessoa];
  const [isFlip, setFlip] = useState(false);
  useEffect(() => {
    if (
      cartasSelecionadas.indexOf(name) >= 0 ||
      cartasCorretas.indexOf(name) >= 0
    ) {
      setFlip(true);
      return;
    }

    setFlip(false);
  }, [cartasSelecionadas, cartasCorretas]);

  function handleClick(element) {
    let carta = element.getAttribute("name");

    definirCartasSelecionadas((currentState) => [...currentState, carta]);
  }

  let classe;
  isFlip ? (classe = "carta flip") : (classe = "carta");

  return (
    <div name={name} className={classe} onClick={(e) => handleClick(e.target)}>
      <div className="back-face">
        <p>Clique em Mim !</p>
      </div>
      <div className="front-face">
        <header>
          <h2>{name}</h2>
        </header>
      </div>
    </div>
  );
};

export default Card;
