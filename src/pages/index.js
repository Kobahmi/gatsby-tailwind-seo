import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import Scroll from "../components/Scroll";
import Fade from "../components/Fade";
import Zoom from "../components/Zoom";

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
