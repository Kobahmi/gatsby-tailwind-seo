import * as React from "react";
import Fade from "../components/Fade";
import Hero from "../components/Hero";
import Layout from "../components/layout";
import Moving from "../components/Moving";
import Scroll from "../components/Scroll";
import Seo from "../components/seo";
import Stick from "../components/Stick";
import Stickier from "../components/Stickier";
import Sticky from "../components/Sticky";
import Zoom from "../components/Zoom";
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
    name: "Everything",
    description: site.siteMetadata.description,
    url: "https://gatsbytailwindseomainbranch.gatsbyjs.io/everything/",
    image: [
      "https://gatsbytailwindseomainbranch.gatsbyjs.io/static/illustration-flowing-conversation-447b9b47aef8c266f047e609cbf11004.svg",

      "https://gatsbytailwindseomainbranch.gatsbyjs.io/static/illustration-grow-together-3c29212c7a9ccd6cccf0412e4b520833.svg",

      "https://gatsbytailwindseomainbranch.gatsbyjs.io/static/illustration-your-users-c07ebfaafd557ff00fa41ee62081bcac.svg",
    ],
  };
  return (
    <Layout>
      <Seo title="Home" schemaMarkup={schema} />
      <Moving />
      <Youtube />
      <Hero />
      <Scroll />
      <Fade />
      <Zoom />
      <Stick />
      <Sticky />
      <Stickier />
    </Layout>
  );
};

export default SecondPage;
