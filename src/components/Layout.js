import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Helmet } from "react-helmet"
import {
  IoIosMenu,
  IoMdClose,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdMail,
} from "react-icons/io"
import Img from "gatsby-image"
import styled from "styled-components"

import "../index.css"

const MainContainer = styled.main`
  margin: 0;
  padding: 0;
`

const Footer = styled.footer`
  background-color: var(--carbon);
  ul {
    padding: 8px 0 0 0;
    list-style-type: none;
  }
  color: white;
  width: 100%;
  padding: 24px 8px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  .navigation {
    grid-column: 2/6;
    text-align: right;
    text-transform: uppercase;
    a {
      color: grey;
    }
    a:hover {
      color: white;
    }
  }
  .social {
    grid-column: 7/12;
    text-align: left;
    a {
      color: white;
      font-size: 1.8em;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 200px;
    }
  }
  small {
    padding: 24px 0 0 0;
    grid-column: 2/12;
    width: 100%;
    text-align: center;
  }
`

const NavContainer = styled.div`
  background-color: var(--yellow);
  position: fixed;
  top: 8px;
  left: 8px;
  min-width: 100px;
  border: solid 1px black;
  border-radius: 4px;
  z-index: 100;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 4px grey;
`
const NavLinks = styled.ul`
  grid-column: 2;
  grid-row: 2;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  grid-column: 1/3;
  display: ${props => (props.toggle ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  a {
    padding: 8px;
    text-transform: uppercase;
    color: grey;
    font-weight: 500;
    position: relative;
    transition: color 0.5s;
  }
  a::after {
    content: "";
    display: block;
    height: 4px;
    width: 0;
    background: var(--carbon);
    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width ease 1s;
  }
  a:hover {
    color: black;
    transition: color 0.5s;
  }
  a:hover::after {
    width: 80%;
    transition: ease 0.5s;
  }
`
const Hamburger = styled.div`
  grid-column: 2;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  outline: none;
`

const NavBar = ({ links }) => {
  const [toggle, setToggle] = useState(false)
  // const [isTop, setIsTop] = useState(true)

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setIsTop(window.scrollY < 100)
  //   })
  // }, [isTop])

  return (
    <NavContainer toggle={toggle}>
      <Hamburger onClick={() => setToggle(!toggle)}>
        {toggle ? <IoMdClose /> : <IoIosMenu />}
      </Hamburger>
      <NavLinks toggle={toggle}>
        {links &&
          links.map((link, index) =>
            link.name === "Blog" ? (
              <AniLink cover direction="left" to={link.path} key={index}>
                {link.name}
              </AniLink>
            ) : (
              <Link to={link.path} key={index}>
                {link.name}
              </Link>
            )
          )}
      </NavLinks>
    </NavContainer>
  )
}

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

  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="I0evl492iQy9Riwn26U7cL2B0LchCQC7N2niZRXr5HE"
        />
      </Helmet>
      {/* <nav className="navbar">
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
      </nav> */}
      <NavBar links={links} />
      <MainContainer>{children}</MainContainer>
      <Footer>
        <div className="navigation">
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
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/achrafnotashraf"
              >
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/achraf-aitsidihammou"
              >
                <IoLogoLinkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/achrafash"
              >
                <IoLogoGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:aitsidihammou.achraf@gmail.com?subject=Hello"
              >
                <IoMdMail />
              </a>
            </li>
          </ul>
        </div>
        <small>
          © {new Date().getFullYear()} - Built with <span role="img">🔥</span>{" "}
          by Achraf ASH
        </small>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
