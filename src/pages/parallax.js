import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Moving from "../components/Moving";
import { useStaticQuery, graphql } from "gatsby";

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
    name: "Parallax",
    description: site.siteMetadata.description,
    url: "https://gatsbytailwindseomainbranch.gatsbyjs.io/parallax/",
  };
  return (
    <Layout>
      <Seo
        title="Parallax"
        schemaMarkup={schema}
        canonical="https://gatsbytailwindseomainbranch.gatsbyjs.io/parallax/"
      />
      <Moving />
    </Layout>
  );
};

export default SecondPage;
