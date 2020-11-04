import { useState, useEffect, useContext } from "react";

import pessoas from "../cartas.json";

import Card from "../components/Card.jsx";
import Modal from "../components/Modal";
import Video from "../components/Video.jsx";

import {AppContext} from "../utils/AppContext.js"

import "../css/jogo.css";

const JogoDaMemoria = () => {
  const {setFooterEnable, setBackgroundMusicPlaying} = useContext(AppContext)
  useEffect(() => {
    setFooterEnable(false);
  }, [])

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
    if (cartasSelecionadas.length === 0) return;

    const quantidadeDeCartasSelecionadas = cartasSelecionadas.length - 1;
    const pos1 = cartasSelecionadas[quantidadeDeCartasSelecionadas - 1];
    const pos2 = cartasSelecionadas[quantidadeDeCartasSelecionadas];
    const posicaoDasCartasSelecionadas = [pos1, pos2]

    function encontrarNomeDaCartaBaseadoEmSuaPosicao (posicao) {
      const {nome} = posicaoCartasDoJogo[posicao]
      return nome
    } 

    if (
      isEven(quantidadeDeCartasSelecionadas) ||
      pos1 === undefined ||
      pos2 === undefined
    )
      return;

    if (cartasCorretas.indexOf(pos1) >= 0) {
      definirCartasSelecionadas((cartasAtuais) =>
        cartasAtuais.filter((cartaAtual) => cartaAtual !== pos1)
      );
      return;
    }

    if (cartasCorretas.indexOf(pos2) >= 0) {
      definirCartasSelecionadas((cartasAtuais) =>
        cartasAtuais.filter((cartaAtual) => cartaAtual !== pos2)
      );
      return;
    }

    if (pos1 === pos2) {
      definirCartasSelecionadas((cartasAtuais) =>
        cartasAtuais.filter((cartaAtual) => posicaoDasCartasSelecionadas.indexOf(cartaAtual) === -1)
      );
      return;
    }

    setTimeout(() => {
      const nomePrimeiraCata = encontrarNomeDaCartaBaseadoEmSuaPosicao(pos1);
      const nomeSegundaCata = encontrarNomeDaCartaBaseadoEmSuaPosicao(pos2);
/*       let nomesTratados = pares.map((par) => {
        return par.split(" ")[0];
      }); */
      if (nomePrimeiraCata === nomeSegundaCata) {
        definirCartasSelecionadas((cartasAtuais) =>
          cartasAtuais.filter((cartaAtual) => posicaoDasCartasSelecionadas.indexOf(cartaAtual) === -1)
        );
        definirCartasCorretas((curentState) => [
          ...curentState,
          pos1,
          pos2,
        ]);
      } else {
        definirCartasSelecionadas((cartasAtuais) =>
          cartasAtuais.filter((cartaAtual) => posicaoDasCartasSelecionadas.indexOf(cartaAtual) === -1)
        );
      }
    }, flipAnimationTime);
  }, [cartasSelecionadas]);

  useEffect(() => {
    let filtro = cartasCorretas.filter(
      (carta, index) => cartasCorretas.indexOf(carta) === index
    );

    if (filtro.length !== cartasCorretas.length) {
      definirCartasCorretas(filtro);
      return;
    }

    if (cartasCorretas.length === posicaoCartasDoJogo.length) {
      setShowModal(true);
      setBackgroundMusicPlaying(false);
    }
  }, [cartasCorretas]);

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  function isEven(n) {
    return Math.abs(n % 2) === 0;
  }

  if (!hasShuffle) {
    setShuffle(true);
  }

  let cartasComponents = posicaoCartasDoJogo.map(({ nome, imagem }, index) => (
    <Card
      key={`${nome} ${index}`}
      id={index}
      imagem={imagem}
      cartasSelecionadas={cartasSelecionadas}
      cartasCorretas={cartasCorretas}
      definirCartasSelecionadas={definirCartasSelecionadas}
    />
  ));
  return (
    <main className="content">
      <section className="jogo">
        <Modal 
        showModal={showModal} 
        setShowModal={setShowModal}
        hasCloseButton={true}>
           <Video/>
        </Modal>
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
