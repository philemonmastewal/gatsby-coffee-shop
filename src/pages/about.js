import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
// import { FaShoppingCart } from "react-icons/fa"  <<<test
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    {/* <FaShoppingCart /> <<<test */}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="about us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

// need to setup the page query(that we made and tested in the graphiQL module) pasted in below and it will be what passes data into Index Page above^^^
export const query = graphql`
  {
    img: file(relativePath: { eq: "coffee_smiley_coffee.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
