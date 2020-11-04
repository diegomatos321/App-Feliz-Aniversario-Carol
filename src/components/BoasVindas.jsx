import { useContext } from "react";

import imgPresenteWebp from "../images/presente.webp";
import imgPresentePng from "../images/presente.png";
import ConfettiComponent from "./ConfettiComponent.jsx";

import {AppContext} from "../utils/AppContext.js"

const BoasVindas = ({ setShowModal }) => {
  const {setBackgroundMusicPlaying} = useContext(AppContext)

  function handleImageClick (){
    setShowModal(false);
    setBackgroundMusicPlaying(true);
  }

  return (
    <div className="boas-vindas-content">
      <header>
        <h1 className="title">Alguém esta fazendo aniversário hoje ?!</h1>
        <p className="subtitle">
          Clique e receba seu presente <strong>maravilha</strong>{" "}
          <span className="emoji">🥳</span> .
        </p>
      </header>
      <ConfettiComponent>
        <picture>
          <source srcSet={imgPresenteWebp} type="image/webp"/>
          <img
          src={imgPresentePng}
          width="200px"
          alt="Imagem Presente de cor vermelha"
          title="Imagem Presente de cor vermelha"
          onClick={handleImageClick}
        />
        </picture>
      </ConfettiComponent>
    </div>
  );
};

export default BoasVindas;
