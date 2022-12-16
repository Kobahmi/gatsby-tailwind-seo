import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Stick from "../components/Stick";
import Stickier from "../components/Stickier";
import Sticky from "../components/Sticky";

const SecondPage = () => (
  <Layout>
    <Stick />
    <Sticky />
    <Stickier />
  </Layout>
);

export const Head = () => <Seo title="Anchor" />;

export default SecondPage;
