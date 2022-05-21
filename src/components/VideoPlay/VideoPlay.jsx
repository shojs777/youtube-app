import React from "react";
import Style from "./VideoPlay.module.scss";
// import { Link } from "react-router-dom";
import YouTube from "react-youtube";
const VideoPlay = ({ id }) => {
  return (
    <div className={Style.wrap}>
      <YouTube className={Style.video} videoId={id} />
    </div>
  );
};

export default VideoPlay;
