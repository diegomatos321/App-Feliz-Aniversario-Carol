import { useState, useEffect } from "react";

const useAudio = (config) => {
  const [audio, setAudio] = useState(new Audio());
  const [hasConfig, setHasConfig] = useState(false);
  const [playing, setPlaying] = useState(false);

  const toggle = (novoEstado) => setPlaying(novoEstado);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  });
  
  useEffect(() => {
    if (audio.readyState === 4) {
      playing ? audio.play() : audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    let audioObj = audio;
    for (const propriedade in config) {
      if (config.hasOwnProperty(propriedade)) {
        const valor = config[propriedade];
        audioObj[propriedade] = valor;
      }
    }
    setAudio(audioObj);
  }, [hasConfig]);

  if (!hasConfig) setHasConfig(true);

  return [playing, toggle];
};

export default useAudio;
