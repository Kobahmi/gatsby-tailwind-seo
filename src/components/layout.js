/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react";

import Header from "./header";

import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Gatsby Tailwind SEO</title>
        <meta name="description" content="description" />
      </Helmet>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default Layout;
