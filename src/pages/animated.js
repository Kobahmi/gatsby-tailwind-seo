import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Youtube from "../components/Youtube";
import "@justinribeiro/lite-youtube";

const SecondPage = () => (
  <Layout>
    <Youtube />
  </Layout>
);

export const Head = () => <Seo title="Animated" />;

export default SecondPage;
