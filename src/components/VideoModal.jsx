import React from "react";
import ReactDom from "react-dom";
import VideoPlaceHolder from "../images/video-placeholder.webp";
import { FaTimesCircle } from "react-icons/fa";

import "../css/modal.css";

const VideoModal = ({ show, onClose }) => {
  if (!show) return null;

  return ReactDom.createPortal(
    <div className="modal">
      <div className="video-modal">
        <div className="close" onClick={() => onClose()}>
          <FaTimesCircle />
        </div>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/C4LM4VTfFOY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* <img src={VideoPlaceHolder} alt="" /> */}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default VideoModal;
