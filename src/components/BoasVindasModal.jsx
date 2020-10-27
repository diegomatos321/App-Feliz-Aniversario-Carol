import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";

import imgPresente from "../images/presente.webp";
import "../css/modal.css";
import useAudio from "../utils/useAudio.js"
import Confetti from "./confetti.jsx";

const BoasVindas = () => {
  const [showModal, setShowModal] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    setTimeout(setShowConfetti(false), 1000);
  }, [showConfetti]);
  const [playing, setPlaying] = useAudio("/audio/confetti-pop-sound-effect.mp3");

  function handleClick(){
    setPlaying(true);
    setShowConfetti(true);
    setShowModal(false);
  }

  let classe = showModal
    ? "modal"
    : "modal disappear";

  return ReactDom.createPortal(
    <section className={classe}>
      <div className="boas-vindas-content">
        <header>
          <h1 className="title">Alguém esta fazendo aniversário hoje ?!</h1>
          <p className="subtitle">
            Clique e receba seu presente <strong>maravilha</strong>{" "}
            <span className="emoji">🥳</span> .
          </p>
        </header>
        <div className="presente">
          <img
            src={imgPresente}
            width="200px"
            alt="Imagem Presente de cor vermelha"
            title="Imagem Presente de cor vermelha"
            onClick={handleClick}
          />
          <Confetti active={showConfetti} />
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
};

export default BoasVindas;
