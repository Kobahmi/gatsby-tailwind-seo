import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import Scroll from "../components/Scroll";
import loadable from "@loadable/component";

const Fade = loadable(() => import("../components/Fade"), {
  fallback: <div>Loading...</div>,
});
const Zoom = loadable(() => import("../components/Zoom"), {
  fallback: <div>Loading...</div>,
});

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Scroll />
      <Fade />
      <Zoom />
    </Layout>
  );
};

export default IndexPage;
