import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/Hero";
import Scroll from "../components/Scroll";
import Fade from "../components/Fade";
import Zoom from "../components/Zoom";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
          }
        }
      }
    `
  );

  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Gatsby Tailwind SEO",
    description: site.siteMetadata.description,
    url: site.siteMetadata.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <Layout>
      <Seo title="Home" schemaMarkup={schema} />
      <Hero />
      <Scroll />
      <Fade />
      <Zoom />
    </Layout>
  );
};

export default IndexPage;
