import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Virtual,
  EffectFade,
} from "swiper";

import "../css/depoimentos.css";
import "swiper/swiper-bundle.css";

import depoimentosDATA from "../depoimentos.json";
import Footer from "../components/Footer.jsx";

SwiperCore.use([Navigation, Pagination, Virtual, EffectFade]);

const Depoimentos = () => {
  const [btnDisable, setBtnDisable] = useState(true);
  const depoimentosComponents = depoimentosDATA.map(
    ({ nome, imagem, mensagens }) => {
      return (
        <SwiperSlide key={nome} tag="li">
          <article className="depoimento">
            <header>
              <figure>
                <img src={`${process.env.PUBLIC_URL}${imagem}`} alt={`Imagem da ${nome}`} title={`Imagem da ${nome}`} />
              </figure>
            </header>
            <blockquote>
              {mensagens.map((mensagem) => (
                <p>{mensagem}</p>
              ))}
            </blockquote>
          </article>
        </SwiperSlide>
      );
    }
  );
  function handleSlideChange ({activeIndex}) {
    console.log(activeIndex)
    if (activeIndex === (depoimentosComponents.length -1)){
      setBtnDisable(false);
    }
  }

  return (
    <>
      <main className="content">
        <section className="depoimentos">
          <header>
            <h1 className="title">Uma Breve mensagem de seus amigos...</h1>
          </header>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            tag="section"
            wrapperTag="ul"
            navigation
            pagination
            virtual
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {depoimentosComponents}
          </Swiper>
        </section>
      </main>
        <Footer isDisable={btnDisable} to="/jogo"/>
    </>
  );
};

export default Depoimentos;
