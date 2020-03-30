import React from "react"
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
    {
      path: "/blog",
      name: "Blog",
    },
  ]

  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="f7vZ7b-yhgOcB6H4OwtD1rrU7r46UE_6ith2cEKPtRI"
        />
      </Helmet>
      <nav className="navbar">
        <div className="thumbnail">
          <span className="tooltip">Nice to meet you!</span>
          <Img fluid={data.avatar.childImageSharp.fluid} />
        </div>
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/achrafnotashraf"
              >
                Follow me on Twitter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/achraf-aitsidihammou"
              >
                Connect me on Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/achrafash"
              >
                Check me on Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:aitsidihammou.achraf@gmail.com?subject=Hello"
              >
                Say hello
              </a>
            </li>
          </ul>
        </div>
        <small>
          © {new Date().getFullYear()} - Built with <span role="img">🔥</span>{" "}
          by Achraf ASH
        </small>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
