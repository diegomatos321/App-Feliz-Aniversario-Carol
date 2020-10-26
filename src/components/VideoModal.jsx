import React from "react";
import ReactDom from "react-dom";
import VideoPlaceHolder from "../images/video-placeholder.jpg";
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
        <img src={VideoPlaceHolder} alt="" />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default VideoModal;
