import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation, Pagination, Virtual, EffectFade} from "swiper";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Virtual, EffectFade])

const Depoimentos = () => {
  let depoimentosComponents = [];
  for (let i = 0; i < 6; i++) {
    const depoimento = (
      <SwiperSlide key={i} tag="article">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi iste,
          sunt obcaecati delectus nemo ipsa nostrum iure porro minima quidem non
          adipisci tenetur dignissimos sit sequi possimus corrupti fugit
          dolorum.
        </p>
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
        navigation
        pagination
        effect="fade"
        Virtual
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {depoimentosComponents}
      </Swiper>
    </section>
  );
};

export default Depoimentos;
