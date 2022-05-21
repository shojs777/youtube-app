import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { FetchSelectedData } from "../../apis";
import { Store } from "../../store/index";
import VideoPlay from "../VideoPlay/VideoPlay.jsx";
import Style from "./VideoDetail.module.scss";
import Linkify from "react-linkify/dist/components/Linkify";

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    console.log("id", id);
    await FetchSelectedData(id).then((res) => {
      console.log(res);
      const item = res.data.items.shift();
      setGlobalState({ type: "SET_SELECTED", payload: { selected: item } });
    });
  };
  useEffect(() => {
    setSelectedVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
