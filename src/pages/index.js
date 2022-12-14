import * as React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/layout";
import Seo from "../components/seo";

import Hero from "../components/Hero";
import Scroll from "../components/Scroll";
import Fade from "../components/Fade";

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Seo title="Home" />

      <Hero />
      <Scroll />
      <Fade />
    </Layout>
  );
};

export default IndexPage;
