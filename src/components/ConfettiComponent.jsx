import { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";
import useAudio from "../utils/useAudio.js";
import ReactDom from "react-dom";

import "../css/confetti.css";

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 25,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 5000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};
const delayTimeMilisec = 1000;

const ConfettiComponent = ({ classe = "", children }) => {
  const [conffetiPos, setConffetiPos] = useState({x : 0, y : 0});
  const [showConffeti, setShowConffeti] = useState(false);
  const [, setConffetiAudioPlaying] = useAudio({
    src: `${process.env.PUBLIC_URL}/audio/confetti-pop-sound-effect.mp3`,
    volume: 1,
  });

  useEffect(() => {
    let timeOutID;
    if (showConffeti) {
      setConffetiAudioPlaying(true);
      timeOutID = setTimeout(() => {
        setShowConffeti(false);
      }, delayTimeMilisec);
    } else {
      setConffetiAudioPlaying(false);
    }
    return () => {
      clearTimeout(timeOutID);
    };
  }, [showConffeti]);

  function handleClick(e){
    console.log(e)
    const {clientX, clientY} = e;
    setConffetiPos({x : clientX, y : clientY})
    setShowConffeti(true)
  }

  return (
    <>
      <div
        className={`confetti-container ${classe}`}
        onClick={(e) => handleClick(e)}
      >
        {children}
      </div>
      {ReactDom.createPortal(
        <div className="confetti-effect" style={{left: conffetiPos.x, top: conffetiPos.y}}>
          <Confetti active={showConffeti} config={config} />
        </div>,
        document.getElementById("portal")
      )}
    </>
  );
};

export default ConfettiComponent;
