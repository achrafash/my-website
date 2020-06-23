import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import SEO from '../components/seo'
import styled from 'styled-components'

export default () => {
  return (
    <Layout>
      <SEO
        title="Welcome to the Lab"
        description="Find my latest and on going projects along with the whole process to help you get started with student entrepreneurship"
      />
      <Header
        title="Welcome to the Lab!"
        description="I’m on a journey to grow side projects as a student. I document the process to share what I learn with other students."
      />
      <Container>coming soon...</Container>
    </Layout>
  )
}

const Container = styled.div`
  padding: 16px;
  font-family: var(--sans-serif);
  font-weight: lighter;
  font-size: 0.8em;
`
