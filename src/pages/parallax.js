import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Fade from "../components/Fade";

const SecondPage = () => (
  <Layout>
    <Fade />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="Parallax" />;

export default SecondPage;
