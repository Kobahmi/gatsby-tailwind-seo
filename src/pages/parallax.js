import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Fade from "../components/Fade";
import Zoom from "../components/Zoom";

const SecondPage = () => (
  <Layout>
    <Zoom />
    <Fade />
  </Layout>
);

export const Head = () => <Seo title="Parallax" />;

export default SecondPage;
