import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Zoom from "../components/Zoom";

const SecondPage = () => (
  <Layout>
    <Zoom />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="Anchor" />;

export default SecondPage;
