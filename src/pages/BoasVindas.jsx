import React from 'react';

import imgPresente from "../images/presente.png";
import { Link } from "react-router-dom";

const FelizAniversario = () => {
  return (
    <section className="boas-vindas">
      <header>
        <h1>Alguém esta fazendo aniversário hoje ?!</h1>
        <p>
          Clique e receba seu presente <strong>maravilha</strong> 🥳.
        </p>
      </header>
      <div>
        <Link to="/feliz-aniversario">
          <img
            type="image"
            src={imgPresente}
            width="200px"
            alt="Imagem Presente de cor vermelha"
            title="Imagem Presente de cor vermelha"
          />
        </Link>
      </div>
    </section>
  );
};

export default FelizAniversario;
