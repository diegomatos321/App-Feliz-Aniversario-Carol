const Video = () => {
  return (
    <div className="video-container">
      <iframe
        title="Vídeo Surpresa"
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/C4LM4VTfFOY"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
