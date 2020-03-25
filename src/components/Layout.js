import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Img from "gatsby-image"

import "./layout.scss"

const Layout = ({ children }) => {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/#projects",
      name: "Projects",
    },
    {
      path: "/#learn",
      name: "Learn",
    },
    {
      path: "/#read",
      name: "Read",
    },
  ]
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="f7vZ7b-yhgOcB6H4OwtD1rrU7r46UE_6ith2cEKPtRI"
        />
      </Helmet>
      <nav className="navbar">
        <div className="thumbnail">avatar</div>
        <ul className="navlinks">
          {links &&
            links.map(link => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        <div className="navigation">
          <span>Navigation</span>
          <ul>
            {links &&
              links.map(link => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="social">
          <span>Social</span>
          <ul>
            <li>
              <Link to="">Follow me on Twitter</Link>
            </li>
            <li>
              <Link to="">Connect me on Linkedin</Link>
            </li>
            <li>
              <Link to="">Check me on Github</Link>
            </li>
            <li>
              <Link to="mailto:aitsidihammou.achraf@gmail.com?subject=Hello">
                Say hello
              </Link>
            </li>
          </ul>
        </div>
        <small>
          © {new Date().getFullYear()} - Built with 🔥 by Achraf ASH
        </small>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
