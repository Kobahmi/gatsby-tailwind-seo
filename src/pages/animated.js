import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import loadable from "@loadable/component";
import { useStaticQuery, graphql } from "gatsby";
const Youtube = loadable(() => import("../components/Youtube"), {
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
    name: "Animated",
    description: site.siteMetadata.description,
    url: "https://gatsbytailwindseomainbranch.gatsbyjs.io/animated/",
  };

  return (
    <Layout>
      <Seo title="Animated" schemaMarkup={schema} />;
      <Youtube />
    </Layout>
  );
};

export default SecondPage;
