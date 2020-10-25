import React from 'react';

import BlankAvatar from "../images/blank-avatar.png";
import {Link} from "react-router-dom";

const FelizAniversario = () => {
  return (
    <>
      <section className="feliz-aniversario">
        <header>
          <h1 className="title">
            <span className="yellow">Feliz</span> Aniversario !
          </h1>
        </header>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          pariatur dolorem eligendi veritatis eaque fugiat molestias eveniet est
          optio consequatur ipsam quaerat laboriosam totam iusto ratione
          voluptate, fugit amet, iure culpa? Maxime, dolorum veritatis. Ipsam
          similique sapiente beatae harum natus soluta, sunt at nulla aperiam
          eius amet ut, illo distinctio.
        </p>
      </section>
      <footer>
        <h2>
          Desenvolvido por:{" "}
          <span>
            <img src={BlankAvatar} width="32px" alt="Diego Matos" />
          </span>
        </h2>
        <p>Saiba mais em: </p>
        <a
          href="https://devdiegomatos.com.br"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i>https://devdiegomatos.com.br</i>
        </a>
      </footer>
      <nav className="navegation">
        <ul>
          <li>
            <Link to="depoimentos">Continuar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FelizAniversario;
