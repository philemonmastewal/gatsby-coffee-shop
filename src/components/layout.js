/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./bootstrap.min.css"
import "./layout.css"

import Navbar from "./Globals/Navbar" //This is a better file to import the navbar into because if we were to put it in index.js then it wouldnt necessarily be on every page; but if we put it in layout.js then we can have this theme/item(navbar) across the entire layout of the site

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
