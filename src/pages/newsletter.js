import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import Header from '../components/Header'

export default () => (
  <Layout>
    <SEO
      title="Newsletter"
      description="Find all my issues here about side projects, freelancing, learning new skills... all while being a full-time student"
    />
    <Header
      title="Newsletter Issues"
      description="I'll post here my weekly issues. Stay tuned for the newsletter coming really soon 😊"
    />
  </Layout>
)
