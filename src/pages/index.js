import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
// import { FaShoppingCart } from "react-icons/fa"  <<<test
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"
import Contact from "../components/Home/Contact"
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={["gatsby", "application", "react"]} />
    {/* <FaShoppingCart /> <<<test */}
    <BackgroundSection img={data.img.childImageSharp.fluid} title="buna" />
    <Info />
    <Menu items={data.menu} />
    <Products />
    <Contact />
  </Layout>
)

// need to setup the page query(that we made and tested in the graphiQL module) pasted in below and it will be what passes data into Index Page above^^^
export const query = graphql`
  {
    img: file(relativePath: { eq: "red-coffee-beans-ready-for-harvest.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulMenuItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
