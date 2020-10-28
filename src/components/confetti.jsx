import React from "react";
import Confetti from "react-dom-confetti";

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

const ConfettiComponent = ({ active }) => {

  return (
    <div className="confetti">
      <Confetti active={active} config={config} />
    </div>
  );
};

export default ConfettiComponent;
