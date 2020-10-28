import React, { useState, useEffect } from "react";

import "../css/jogo.css";
import Card from "../components/Card.jsx";
import VideoModal from "../components/VideoModal.jsx";

import pessoas from "../cartas.json"

const JogoDaMemoria = () => {
  const [posicaoCartasDoJogo, definirPosicaoCartasDoJogo] = useState(pessoas);
  const [hasShuffle, setShuffle] = useState(false);
  const [cartasSelecionadas, definirCartasSelecionadas] = useState([]);
  const [cartasCorretas, definirCartasCorretas] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const flipAnimationTime = 1000; // Em milisegundos

  useEffect(() => {
    let dobroCartas = posicaoCartasDoJogo.concat(posicaoCartasDoJogo);

    shuffle(dobroCartas);
    definirPosicaoCartasDoJogo(dobroCartas);
  }, [hasShuffle]);

  useEffect(() => {
    let index = cartasSelecionadas.length - 1;
    let pares = [cartasSelecionadas[index - 1], cartasSelecionadas[index]];

    if (isEven(index) || pares[0] === undefined || pares[1] === undefined) return
    if (cartasCorretas.indexOf(pares[0]) >= 0 || cartasCorretas.indexOf(pares[1]) >= 0 || pares[0] === pares[1]) {
      definirCartasSelecionadas((currentState) =>
        currentState.filter((carta) => pares.indexOf(carta) === -1)
      );
      return;
    }

    setTimeout(() => {
      let nomesTratados = pares.map((par) => {
        return par.split(" ")[0];
      });
      if (nomesTratados[0] === nomesTratados[1]) {
        definirCartasSelecionadas((currentState) =>
        currentState.filter((carta) => pares.indexOf(carta) === -1)
      );
        definirCartasCorretas((curentState) => [
          ...curentState,
          pares[0],
          pares[1],
        ]);
      } else {
        definirCartasSelecionadas((currentState) =>
          currentState.filter((carta) => pares.indexOf(carta) === -1)
        );
      }
      }, flipAnimationTime);
  }, [cartasSelecionadas]);

  useEffect(() => {
    let filtro = cartasCorretas.filter((carta, index) => cartasCorretas.indexOf(carta) === index)

    if (filtro.length != cartasCorretas.length) {
      definirCartasCorretas(filtro);
      return
    }

    if (cartasCorretas.length === posicaoCartasDoJogo.length) {
      setShowModal(true);
    }
  }, [cartasCorretas]);

  function isOdd(n) {
    return Math.abs(n % 2) == 1;
  }

  function isEven(n) {
   return Math.abs(n % 2) == 0
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  if (!hasShuffle) {
    setShuffle(true);
  }

  let cartasComponents = posicaoCartasDoJogo.map(({nome, imagem}, index) => (
    <Card
      key={`${nome} ${index}`}
      id={`${nome} ${index}`}
      imagem={imagem}
      cartasSelecionadas={cartasSelecionadas}
      cartasCorretas={cartasCorretas}
      definirCartasSelecionadas={definirCartasSelecionadas}
    />
  ));
  return (
    <main style={{minHeight:"100vh"}} className="content backgrond-red">
      <section className="jogo">
        <VideoModal show={showModal} onClose={() => setShowModal(false)} />
        <header>
          <h1 className="title">Jogo dos Amigos !</h1>
          <p className="subtitle">
            <i>Encontre todos os pares de cartas iguais !</i>
          </p>
        </header>
        <section className="tabuleiro">{cartasComponents}</section>
      </section>
    </main>
  );
};

export default JogoDaMemoria;
