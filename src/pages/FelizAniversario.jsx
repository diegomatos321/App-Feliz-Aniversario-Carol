import React, { useState, useEffect } from "react";

// import BlankAvatar from "../images/blank-avatar.webp";
import BoasVindas from "../components/BoasVindasModal.jsx";
import Confetti from "../components/confetti.jsx";
import "../css/felizAniversario.css";
import Footer from "../components/Footer.jsx";

const FelizAniversario = () => {
  const [showConfetti, setShowConfetti] = useState([false]);
  useEffect(() => {
    setTimeout(setShowConfetti(false), 1000);
  }, [showConfetti]);

  return (
    <>
      <main className="content">
        <BoasVindas />
        <section className="feliz-aniversario">
          <header>
            <h1 className="title" onClick={() => setShowConfetti(true)}>
              <span className="red">Feliz</span> Aniversario !
            </h1>
            <Confetti active={showConfetti} />
          </header>
          <div className="principal">
            <p>
              Oi Carol, como vai ? Aqui é o Diego e, como sempre, desejo-lhe
              muita <strong>saúde</strong>, <strong>paz</strong> e{" "}
              <strong>felicidades</strong> !! Que esse dia seja muito especial
              para você.
            </p>
            <p>
              Bem, preciso nem dizer que por causa da pandemia que estamos
              vivendo, não poderemos nos encontrar, então, nós (especificamente
              a Gabi), decidimos fazer algo mais diferenciável para voce, espero
              que goste !
            </p>
            <p>
              Continue avançando que voce terá mais algumas surpresa até o final
              desse app
            </p>
          </div>
        </section>
      </main>
      <Footer isDisable={false} to="/depoimentos" />
    </>
  );
};

export default FelizAniversario;
