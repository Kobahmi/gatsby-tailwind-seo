import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Scroll from "../components/Scroll";

const SecondPage = () => (
  <Layout>
    <Scroll />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="Media" />;

export default SecondPage;
