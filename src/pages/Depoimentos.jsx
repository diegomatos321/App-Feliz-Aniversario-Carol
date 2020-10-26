import React from "react";
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Virtual,
  EffectFade,
} from "swiper";

import BlankAvatar from "../images/blank-avatar.png";
import "../css/depoimentos.css"
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Virtual, EffectFade]);

const Depoimentos = () => {
  let depoimentosComponents = [];
  for (let i = 0; i < 6; i++) {
    const depoimento = (
      <SwiperSlide key={i} tag="li">
        <article className="depoimento">
          <header>
            <figure>
              <img src={BlankAvatar} width="32px" alt=""/>
              <figcaption>
                Lorem, ipsum.
              </figcaption>
            </figure>
          </header>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            iste, sunt obcaecati delectus nemo ipsa nostrum iure porro minima
            quidem non adipisci tenetur dignissimos sit sequi possimus corrupti
            fugit dolorum.
          </p>
        </article>
      </SwiperSlide>
    );
    depoimentosComponents.push(depoimento);
  }

  return (
    <section className="depoimentos">
      <header>
        <h1>Uma Breve mensagem de seus amigos...</h1>
      </header>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        virtual
        onSlideChange={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {depoimentosComponents}
      </Swiper>
      <nav>
        <ul>
          <li>
            <Link to="/jogo">
              Continuar
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Depoimentos;
