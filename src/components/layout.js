/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta
          name="description"
          content="Je croise les doigts pour 100% SEO!"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
