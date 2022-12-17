import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Funny from "../components/Funny";

const SecondPage = () => (
  <Layout>
    <Funny />
  </Layout>
);

export const Head = () => <Seo title="Media" />;

export default SecondPage;
