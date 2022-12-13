import * as React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Header from "../components/header";

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Seo title="Home" />
      <Header />
    </Layout>
  );
};

export default IndexPage;
