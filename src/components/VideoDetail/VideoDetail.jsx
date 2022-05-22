import React, { useContext } from "react";

import { Store } from "../../store/index";
import VideoPlay from "../VideoPlay/VideoPlay.jsx";
import Style from "./VideoDetail.module.scss";
import Linkify from "react-linkify/dist/components/Linkify";

const VideoDetail = () => {
  const { globalState } = useContext(Store);
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>no data</span>
  );
};

export default VideoDetail;
