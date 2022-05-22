import { React, useContext, useEffect } from "react";
import Layout from "../components/Layout/Layout.jsx";
import { fetchPopularData } from "../apis/index";
import { Store } from "../store";
import VideoGrid from "../components/VideoGrid/VideoGrid.jsx";
import VideoGridItem from "../components/VideoGridItem/VideoGridItem.jsx";

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(() => {
    fetchPopularData().then((res) => {
      // console.log("data", res);
      setGlobalState({
        type: "SET_POPULAR",
        payload: { popular: res.data.items },
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout>
      <VideoGrid>
        {globalState.popular ? (
          globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={
                  popular.snippet?.thumbnails?.medium?.url
                    ? popular.snippet?.thumbnails?.medium.url
                    : null
                }
                title={popular.snippet.title}
              />
            );
          })
        ) : (
          <span>no data</span>
        )}
      </VideoGrid>
    </Layout>
  );
};

export default Top;
