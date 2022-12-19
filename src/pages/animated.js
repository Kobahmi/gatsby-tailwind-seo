import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
const Youtube = loadable(() => import("../components/Youtube"), {
  fallback: <div>Loading...</div>,
});

const SecondPage = () => (
  <Layout>
    <Youtube />
  </Layout>
);

export const Head = () => <Seo title="Animated" />;

export default SecondPage;
