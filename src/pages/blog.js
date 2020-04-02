import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "../components/blog.scss"
import styled from "styled-components"

const StyledH1 = styled.h1``

const PostWrapper = styled.div``

const Image = styled(Img)`
  border-radius: 5px;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={"Achraf's Blog"} />
      <section id="blog-section">
        {data.allMdx.nodes.map(({ id, fields, excerpt, frontmatter }) => (
          <PostWrapper key={id}>
            <Link to={fields.slug}>
              {!!frontmatter.cover ? (
                <Image sizes={frontmatter.cover.childImageSharp.sizes} />
              ) : null}
              <h1>{frontmatter.title}</h1>
              <small>{frontmatter.date}</small>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MM Do")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
