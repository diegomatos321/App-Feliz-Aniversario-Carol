import { useState, useContext, useEffect } from "react";

import depoimentosDATA from "../depoimentos.json";
import Slider from "../components/Slider.jsx";
import {AppContext} from "../utils/AppContext.js"

import "../css/depoimentos.css"

const Depoimentos = () => {
  const [depoimentos] = useState(depoimentosDATA);

  const {setFooterEnable, setNextPage} = useContext(AppContext)
  useEffect(() => {
    setFooterEnable(false);
    setNextPage("/jogo");
  }, [])

  function handleSlideEnd(){
    setFooterEnable(true);
  }

  const depoimentosComponents = depoimentos.map(({ nome, imagem, mensagens }) => {
    return (
    <article key={nome} className="depoimento">
      <header>
        <picture>
          <source srcSet={`${process.env.PUBLIC_URL}${imagem}.webp`} type="image/webp"/>
          <img
            src={`${process.env.PUBLIC_URL}${imagem}.png`}
            width="200px"
            alt={`Imagem de ${nome}`}
            title={`Imagem de ${nome}`}
          />
        </picture>
      </header>
      <blockquote>
        {mensagens.map((mensagem, i) => (
          <p key={`Mensagem de ${nome} ${i}`}>{mensagem}</p>
        ))}
      </blockquote>
    </article>
    )
  })

  return (
      <main className="content">
        <section className="depoimentos">
          <header>
            <h1 className="title">Uma Breve mensagem de seus amigos...</h1>
          </header>
          <Slider
            onEnd={handleSlideEnd}
          >
            {depoimentosComponents}
          </Slider>
        </section>
      </main>
  );
};

export default Depoimentos;
