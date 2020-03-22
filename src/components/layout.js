import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Img from "gatsby-image"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="f7vZ7b-yhgOcB6H4OwtD1rrU7r46UE_6ith2cEKPtRI"
        />
      </Helmet>
      <nav className="navbar">
        <ul className="grid-col">
          <li className="grid-child">
            <Link to="/">AA.</Link>
          </li>
          <li className="grid-child">
            <Link to="/">Home</Link>
          </li>
          <li className="grid-child">
            <Link to="/#work">Work</Link>
          </li>
          <li className="grid-child">
            <Link to="/#learn">Learn</Link>
          </li>
          <li className="grid-child">
            <Link to="/#read">Read</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>

      <footer>
        <ul className="grid-col">
          <li className="grid-child">
            <Link to="/">Home</Link>
          </li>
          <li className="grid-child">
            <Link to="/#work">Work</Link>
          </li>
          <li className="grid-child">
            <Link to="/#learn">Learn</Link>
          </li>
          <li className="grid-child">
            <Link to="/#read">Read</Link>
          </li>
        </ul>
        <small>
          © {new Date().getFullYear()} - Built with{` `}
          <a target="_blank" href="https://www.gatsbyjs.org">
            Gatsby
          </a>
        </small>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
