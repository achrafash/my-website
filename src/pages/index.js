import React from "react"
import { useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  {
    profile: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
  `)

  return(
    <Layout>
      <SEO title="Achraf ASH"/>
      <div className="wrapper home">
        <h2>
          Développeur Web
          <br/>
          Étudiant Indépendant
        </h2>
        <div className="profile-img">
          <Img fluid={data.profile.childImageSharp.fluid}/>
        </div>
      </div>
    </Layout>
  )
} 
export default IndexPage
