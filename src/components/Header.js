import React from "react"
import styled from "styled-components"

export default ({ title, description }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
)

const Container = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid white;
`

const Title = styled.h3`
  font-family: var(--serif);
  font-size: 2em;
`

const Description = styled.p`
  font-family: var(--sans-serif);
`
