import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { MdClose } from "react-icons/md"

export default ({
  toggle,
  setToggle,
  thumbnail,
  images,
  title,
  subtitle,
  description,
  link,
}) => (
  <Background toggle={toggle} setToggle={setToggle}>
    <Close onClick={() => setToggle(!toggle)} />
    <Container>
      <Thumbnail fluid={thumbnail} />
      <Images>
        {images &&
          images.map((image, index) => <Img key={index} fluid={image} />)}
      </Images>
      <Text>
        <h3>{title}</h3>
        <span>{subtitle}</span>
        <p>{description}</p>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          Check it live
        </a>
      </Text>
    </Container>
  </Background>
)

const Background = styled.div`
  display: ${props => (props.toggle ? `flex` : `none`)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  background-color: white;
  width: 90%;
  max-height: 90%;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  overflow-y: auto;
  @media only screen and (min-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }
`
const Close = styled(MdClose)`
  cursor: pointer;
  align-self: flex-end;
  font-size: 2em;
  position: relative;
  transform: translateX(-100%);
  fill: var(--black);
  transition: fill 0.3s;
  &:hover {
    fill: var(--coral);
    transition: 0.3s;
  }
`
const Thumbnail = styled(Img)`
  grid-column: 1;
  grid-row: 1;
  @media only screen and (min-width: 990px) {
    grid-column: 1;
    grid-row: 1;
  }
`
const Images = styled.div`
  grid-row: 3;
  grid-column: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  @media only screen and (min-width: 990px) {
    grid-row: 2;
  }
`
const Text = styled.div`
  grid-column: 1;
  grid-row: 2;
  h3 {
    font-family: var(--serif);
    font-size: 1.2em;
  }
  span {
    font-family: var(--sans-serif);
    font-size: 1em;
  }
  p {
    padding: 24px 0 16px 0;
  }
  @media only screen and (min-width: 990px) {
    grid-column: 2;
    grid-row: 1;
    padding: 0 24px;
  }
`
