import { useState, useEffect, useContext } from "react";

import Modal from "../components/Modal.jsx"
import BoasVindas from "../components/BoasVindas.jsx";
import ConfettiComponent from "../components/ConfettiComponent.jsx";

import { AppContext } from "../utils/AppContext.js"
import "../css/felizAniversario.css";

const FelizAniversario = () => {
  const [showModal, setShowModal] = useState(true);
  const { setNextPage, setFooterEnable } = useContext(AppContext);

  useEffect(() => {
    setFooterEnable(true);
    setNextPage("/depoimentos");
  }, [])
  
  return (
      <main className="content">
        <Modal 
        showModal={showModal}
        setShowModal={setShowModal}
        >
         <BoasVindas setShowModal={setShowModal}/>
        </Modal>
        <section className="feliz-aniversario">
          <header>
            <ConfettiComponent>
              <h1 className="title">
                <span className="red">Feliz</span> Aniversario !
              </h1>
            </ConfettiComponent>
          </header>
          <div className="principal">
            <p>
              Oi Carol, como vai ? Aqui é o Diego e, como sempre, desejo-lhe
              muita <strong>saúde</strong>, <strong>paz</strong> e <strong>felicidades</strong> !! Que esse dia seja muito especial
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
              desse app.
            </p>
          </div>
        </section>
      </main>
  );
};

export default FelizAniversario;
