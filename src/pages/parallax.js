import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Moving from "../components/Moving";

const SecondPage = () => (
  <Layout>
    <Moving />
  </Layout>
);

export const Head = () => <Seo title="Parallax" />;

export default SecondPage;
