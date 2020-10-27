import React, { useState, useEffect } from "react";

const useAudio = url => {
  const [audio] = useState(new Audio(`${process.env.PUBLIC_URL}${url}`));
  const [playing, setPlaying] = useState(false);

  const toggle = (novoEstado) => setPlaying(novoEstado);

  useEffect(() => {
      console.log(playing)
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default useAudio;