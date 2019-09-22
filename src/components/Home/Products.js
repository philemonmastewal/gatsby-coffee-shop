import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

//we can pass the query as a variable, so we will create that below this line to handle our query instead of leaving it in the Products component and making it so dense
const getProducts = graphql`
  {
    products: allContentfulMenuItem {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      //remember that what we are getting from this query^^^above is "data.products".......we are then passing data object into the arrow function below
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="our products" />
              <div className="row">
                {/* by calling node: "product" we can then reference "product._____" to work with the deconstructed node object  */}
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
