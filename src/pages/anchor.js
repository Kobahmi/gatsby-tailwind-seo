import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Stick from "../components/Stick";
import loadable from "@loadable/component";
const Sticky = loadable(() => import("../components/Sticky"), {
  fallback: <div>Loading...</div>,
});
const Stickier = loadable(() => import("../components/Stickier"), {
  fallback: <div>Loading...</div>,
});

const SecondPage = () => (
  <Layout>
    <Stick />
    <Sticky />
    <Stickier />
  </Layout>
);

export const Head = () => <Seo title="Anchor" />;

export default SecondPage;
