import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Stick from "../components/Stick";
import loadable from "@loadable/component";
import { useStaticQuery, graphql } from "gatsby";
const Sticky = loadable(() => import("../components/Sticky"), {
  fallback: <div>Loading...</div>,
});
const Stickier = loadable(() => import("../components/Stickier"), {
  fallback: <div>Loading...</div>,
});

const SecondPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  );

  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    name: "Anchor",
    description: site.siteMetadata.description,
    url: "https://gatsbytailwindseomainbranch.gatsbyjs.io/anchor/",
  };
  return (
    <Layout>
      <Seo title="Anchor" schemaMarkup={schema} />
      <Stick />
      <Sticky />
      <Stickier />
    </Layout>
  );
};

export default SecondPage;
