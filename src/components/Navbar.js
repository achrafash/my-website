import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IoIosMenu, IoMdClose } from "react-icons/io"

export default ({ links, themeContext }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <NavContainer toggle={toggle}>
      <Hamburger toggle={toggle} onClick={() => setToggle(!toggle)}>
        <IoMdClose />
        <IoIosMenu />
      </Hamburger>
      <NavLinks toggle={toggle}>
        {links &&
          links.map((link, index) => (
            <Link to={link.path} key={index}>
              {link.name}
            </Link>
          ))}
      </NavLinks>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  background-color: var(--background);
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 20;
  padding: 8px 24px;
  display: grid;
  grid-template-columns: 1fr;
  @media only screen and (min-width: 990px) {
    width: 200px;
  }
`
const NavLinks = styled.ul`
  grid-column: 1;
  justify-content: space-evenly;
  padding: 4px;
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
    padding: 8px;
    text-transform: capitalize;
    letter-spacing: 2px;
    font-family: var(--sans-serif);
    color: var(--fontColor);
    position: relative;
    transition: color 0.5s;
    position: relative;
    width: 50%;
    max-width: 200px;
    text-align: left;
    transition: color 1s 0.2s;
  }
  a::after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 0;
    background-color: var(--coral);
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    z-index: -1;
    transition: width linear 0.5s;
  }
  a:hover {
    color: ${props => props.theme.fontNegativeColor};
    transition: color 0.5s;
  }
  a:hover::after {
    width: 100%;
    transition: ease 0.5s;
  }
  @media only screen and (min-width: 990px) {
    visibility: visible;
    overflow: visible;
    max-height: 100%;
    width: 100%;
    a {
      padding: 8px;
      width: 100%;
    }
  }
`
const Hamburger = styled.div`
  grid-column: 1;
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
    opacity: ${props => (props.toggle ? 1 : 0)};
  }
  svg:nth-child(2) {
    opacity: ${props => (props.toggle ? 0 : 1)};
  }
  @media only screen and (min-width: 990px) {
    display: none;
  }
`
