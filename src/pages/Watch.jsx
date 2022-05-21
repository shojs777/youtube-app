import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import SideList from "../components/SideList/SideList.jsx";
import VideoDetail from "../components/VideoDetail/VideoDetail.jsx";
const Watch = () => {
  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  );
};

export default Watch;
