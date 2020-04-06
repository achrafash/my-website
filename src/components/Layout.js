import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import { IoIosMenu } from "react-icons/io"
import Img from "gatsby-image"
import styled from "styled-components"

import "./layout.scss"

const NavContainer = styled.div`
  background-color: ${props => (props.top && !props.toggle ? "none" : "white")};
  position: fixed;
  z-index: 100;
  width: 100%;
  padding: 8px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  box-shadow: ${props =>
    props.top && !props.toggle ? "none" : "0px 0px 10px grey"};
`
const Thumbnail = styled.div`
  grid-column: 1;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #f1c40f;
  &:hover::after {
    content: "Hi! Nice to meet you!";
    display: block;
    background-color: #f1c40f;
    color: $black;
    text-align: center;
    border-radius: 0 5px 5px 5px;
    box-shadow: 0px 5px 10px grey;
    padding: 5px 10px;
    position: absolute;
    top: 50px;
    left: 50px;
    z-index: 1;
  }
`
const NavLinks = styled.ul`
  grid-column: 2;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media screen and (max-width: 750px) {
    grid-row: 2;
    grid-column: 1/3;
    display: ${props => (props.toggle ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
  }
  a {
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
    background: #f1c40f;
    position: absolute;
    bottom: 0;
    z-index: -1;
    left: 50%;
    transform: translate(-50%, 25%);
    transition: width ease 1s;
  }
  a:hover {
    color: black;
    transition: color 0.5s;
  }
  a:hover::after {
    width: 120%;
    transition: ease 0.5s;
  }
`
const Hamburger = styled.button`
  grid-column: 2;
  place-self: center end;
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 40px;
  outline: none;
  @media screen and (max-width: 750px) {
    display: block;
  }
`

const NavBar = ({ links, thumbnail }) => {
  const [toggle, setToggle] = useState(false)
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsTop(window.scrollY < 100)
    })
  }, [isTop])

  return (
    <NavContainer toggle={toggle} top={isTop}>
      <Thumbnail>
        <Img fluid={thumbnail} />
      </Thumbnail>
      <NavLinks toggle={toggle}>
        {links &&
          links.map((link, index) => (
            <Link to={link.path} key={index}>
              {link.name}
            </Link>
          ))}
      </NavLinks>
      <Hamburger onClick={() => setToggle(!toggle)}>
        <IoIosMenu />
      </Hamburger>
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
      <NavBar links={links} thumbnail={data.avatar.childImageSharp.fluid} />
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
