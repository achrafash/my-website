import React, { useState, createContext, useContext } from "react"
import { Swipeable } from "react-swipeable"
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
  IoMdMoon,
  IoMdSunny,
} from "react-icons/io"
import styled, { withTheme } from "styled-components"
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"
import { GlobalStyle } from "./GlobalStyle"

const MainContainer = styled.main`
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.bg};
  color: var(--fontColor);
  transition: color 0.5s, background-color 0.5s;
`

const Footer = styled.footer`
  background-color: var(--carbon);
  border-top: solid 1px grey;
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
  background-color: var(--mainColor);
  position: fixed;
  top: 8px;
  left: ${props => (props.navbarPosition === "left" ? `8px` : `none`)};
  right: ${props => (props.navbarPosition === "right" ? `8px` : `none`)};
  min-width: 100px;
  border: solid 1px black;
  border-radius: 4px;
  z-index: 1000;
  padding: 2px 8px;
  display: grid;
  grid-template-columns: auto auto;
  box-shadow: 0px 1px 4px var(--carbon);
`
const NavLinks = styled.ul`
  grid-column: 1/3;
  justify-content: space-evenly;
  padding: 0;
  max-width: 100%;
  width: 100%;
  max-height: 0;
  ${props => {
    if (props.toggle)
      return `
        max-height: 240px;
      `
  }};
  transition: max-height 0.2s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${props => (props.toggle ? "visible" : "hidden")};
  overflow: hidden;
  a {
    padding: 8px 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: lighter;
    color: var(--fontColor);
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
    background-color: var(--secondaryColor);
    top: 50%;
    z-index: -1;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width linear 1s, background-color 0.5s;
  }
  a:hover {
    color: ${props => props.theme.fontNegativeColor};
    transition: color 0.5s;
  }
  a:hover::after {
    width: 100%;
    transition: ease 0.5s;
  }
`
const Hamburger = styled.div`
  grid-column: 1;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: var(--fontColor);
  transition: color 0.5s;
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
const DarkMode = styled.div`
  grid-column: 2;
  justify-self: end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: var(--fontColor);
  transition: color 0.5s;
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
    opacity: ${props => (props.theme.isDark ? 1 : 0)};
  }
  svg:nth-child(2) {
    opacity: ${props => (props.theme.isDark ? 0 : 1)};
  }
`

const NavBar = ({ links, themeContext }) => {
  const [toggle, setToggle] = useState(false)
  const [navbarPosition, setNavbarPosition] = useState("left")
  return (
    <NavContainer
      navbarPosition={navbarPosition}
      toggle={toggle}
      onSwipedRight={() => {
        setNavbarPosition("right")
      }}
      onSwipedLeft={() => {
        setNavbarPosition("left")
      }}
    >
      <Hamburger toggle={toggle} onClick={() => setToggle(!toggle)}>
        <IoMdClose />
        <IoIosMenu />
      </Hamburger>
      <DarkMode onClick={() => themeContext.toggleDark()}>
        <IoMdSunny />
        <IoMdMoon />
      </DarkMode>
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

const Layout = withTheme(({ children, theme }) => {
  const themeContext = useContext(ThemeManagerContext)
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
      <GlobalStyle theme={theme} />
      <Helmet>
        <meta
          name="google-site-verification"
          content="I0evl492iQy9Riwn26U7cL2B0LchCQC7N2niZRXr5HE"
        />
      </Helmet>
      <NavBar links={links} themeContext={themeContext} />
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
})

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
