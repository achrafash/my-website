import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BlogSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px 16px;
`
const BlogHeader = styled.h2`
  width: 100%;
  padding: 8px;
  border-bottom: 2px solid rgb(232, 232, 232);
`
const BlogList = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0;
  text-align: justify;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
`
const PostWrapper = styled.div`
  max-width: 100%;
  padding-bottom: 24px;
  border-bottom: solid 1px lightgrey;
  h1 {
    font-size: 1.2em;
    padding: 16px 0;
  }
  a {
    color: black;
  }
  p {
    padding: 8px 0;
    color: darkgrey;
    line-height: 1.5;
  }
  small {
    text-transform: uppercase;
    color: darkgrey;
  }
`
const Image = styled(Img)`
  border-radius: 3px;
  max-width: 500px;
  height: auto;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={"Achraf's Blog"} />
      <BlogSection>
        <BlogHeader>Achraf's Blog</BlogHeader>
        <BlogList>
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
        </BlogList>
      </BlogSection>
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
          date(formatString: "DD MMM YYYY")
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#000" }) {
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
