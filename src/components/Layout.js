import React, { useState } from "react"
import { useSwipeable, Swipeable } from "react-swipeable"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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
    letter-spacing: 2px;
    a {
      color: grey;
      line-height: 1.5;
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
      max-width: 150px;
    }
    svg:hover {
      color: var(--yellow);
    }
  }
  small {
    padding: 24px 0 0 0;
    grid-column: 2/12;
    width: 100%;
    text-align: center;
  }
`

const NavContainer = styled(Swipeable)`
  background-color: var(--yellow);
  position: fixed;
  top: 8px;
  left: ${props => (props.isRight ? `none` : `8px`)};
  right: ${props => (props.isRight ? `8px` : `none`)};
  min-width: 100px;
  border: solid 1px black;
  border-radius: 4px;
  z-index: 1000;
  padding: 2px 8px;
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
  flex-direction: row;
  justify-content: space-evenly;
  grid-column: 1/3;
  visibility: ${props => (props.toggle ? "visible" : "hidden")};
  max-height: 0;
  ${props => {
    if (props.toggle)
      return `
        max-height: 240px;
      `
  }};
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0;
  a {
    padding: 8px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: lighter;
    color: black;
    position: relative;
    transition: color 0.5s;
    position: relative;
    width: 100%;
    text-align: center;
    transition: color 1s;
  }
  a::after {
    content: "";
    display: block;
    position: absolute;
    height: 75%;
    width: 0;
    background: var(--carbon);
    /* opacity: 0.2; */
    top: 50%;
    z-index: -1;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width linear 1s;
  }
  a:hover {
    color: white;
    transition: color 0.5s;
  }
  a:hover::after {
    width: 100%;
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
  display: grid;
  align-items: center;
  svg {
    grid-column: 1;
    grid-row: 1;
    opacity: 1;
    transition: opacity ease-in-out 0.3s;
  }
  svg:nth-child(1) {
    opacity: ${props => (props.toggle ? 1 : 0)};
  }
  svg:nth-child(2) {
    opacity: ${props => (props.toggle ? 0 : 1)};
  }
`

const NavBar = ({ links }) => {
  const [toggle, setToggle] = useState(false)
  const [isRight, setIsRight] = useState(false)
  // const [isTop, setIsTop] = useState(true)

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setIsTop(window.scrollY < 100)
  //   })
  // }, [isTop])

  return (
    <NavContainer
      isRight={isRight}
      toggle={toggle}
      onSwipedRight={eventData => {
        setIsRight(true)
      }}
      onSwipedLeft={eventData => {
        setIsRight(false)
      }}
    >
      <Hamburger toggle={toggle} onClick={() => setToggle(!toggle)}>
        <IoMdClose />
        <IoIosMenu />
      </Hamburger>
      <NavLinks toggle={toggle}>
        {links &&
          links.map((link, index) =>
            link.name === "Blog" ? (
              <AniLink
                cover
                bg="#2f3640"
                direction="left"
                to={link.path}
                key={index}
              >
                {link.name}
              </AniLink>
            ) : link.name === "Home" ? (
              <AniLink
                cover
                bg="#2f3640"
                direction="right"
                to={link.path}
                key={index}
              >
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

  const [isRight, setIsRight] = useState(true)
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="I0evl492iQy9Riwn26U7cL2B0LchCQC7N2niZRXr5HE"
        />
      </Helmet>
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
