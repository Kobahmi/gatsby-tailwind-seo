import * as React from "react";

import Hero from "../components/Hero";
import Layout from "../components/layout";
import Moving from "../components/Moving";
import Scroll from "../components/Scroll";
import Seo from "../components/seo";
import Stick from "../components/Stick";
import Stickier from "../components/Stickier";
import Sticky from "../components/Sticky";
import Zoom from "../components/Zoom";
import loadable from "@loadable/component";
const Youtube = loadable(() => import("../components/Youtube"), {
  fallback: <div>Loading...</div>,
});
const Fade = loadable(() => import("../components/Fade"), {
  fallback: <div>Loading...</div>,
});

const SecondPage = () => (
  <Layout>
    <Moving />
    <Youtube />
    <Hero />
    <Scroll />
    <Fade />
    <Zoom />
    <Stick />
    <Sticky />
    <Stickier />
  </Layout>
);

export const Head = () => <Seo title="Everything" />;

export default SecondPage;
