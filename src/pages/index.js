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
    "@type": "WebPage",
    name: "Gatsby Tailwind SEO",
    description: site.siteMetadata.description,
    url: site.siteMetadata.siteUrl,
    image: [
      "https://gatsbytailwindseomainbranch.gatsbyjs.io/static/illustration-flowing-conversation-447b9b47aef8c266f047e609cbf11004.svg",

      "https://gatsbytailwindseomainbranch.gatsbyjs.io/static/illustration-grow-together-3c29212c7a9ccd6cccf0412e4b520833.svg",

      "https://gatsbytailwindseomainbranch.gatsbyjs.io/static/illustration-your-users-c07ebfaafd557ff00fa41ee62081bcac.svg",
    ],
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
