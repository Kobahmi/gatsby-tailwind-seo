import * as React from "react";
import Fade from "../components/Fade";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Moving from "../components/Moving";
import Scroll from "../components/Scroll";
import Seo from "../components/seo";
import Stick from "../components/Stick";
import Stickier from "../components/Stickier";
import Sticky from "../components/Sticky";
import Zoom from "../components/Zoom";
<<<<<<< HEAD
import Youtube from "../components/Youtube";
=======
import loadable from "@loadable/component";
const Youtube = loadable(() => import("../components/Youtube"), {
  fallback: <div>Loading...</div>,
});
>>>>>>> parent of 079ee449 (lazy loaded fade)

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
