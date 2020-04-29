import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import styled from "styled-components"
import Img from "gatsby-image"

const PostWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 40px 16px;
`
const PostTitle = styled.h1`
  width: 100%;
  padding: 16px 0px;
  font-size: 1.5em;
  text-transform: capitalize;
  border-bottom: 1px solid lightgrey;
`
const MetaPost = styled.small`
  padding-top: 16px;
  text-transform: uppercase;
  color: darkgrey;
`
const Image = styled(Img)`
  padding: 48px;
  margin: 24px 0;
  z-index: -1;
`
const PostContent = styled.div`
  width: 100%;
  line-height: 1.5;
  padding: 32px 0;
`
const PostSuggestion = styled.div`
  border-top: 1px solid lightgrey;
  padding: 40px 0;
  text-transform: capitalize;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`
const PostLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  h3 {
    color: black;
    font-size: 1.5em;
  }
  small {
    padding-top: 8px;
    text-transform: uppercase;
    color: darkgrey;
  }
`

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { previous, next } = pageContext
  return (
    <Layout>
      <PostWrapper>
        <PostTitle>{frontmatter.title}</PostTitle>
        <MetaPost>{frontmatter.date} - 3 min read</MetaPost>
        {!!frontmatter.cover ? (
          <Image sizes={frontmatter.cover.childImageSharp.sizes} />
        ) : null}
        <PostContent>
          <MDXRenderer>{body}</MDXRenderer>
        </PostContent>
        <PostSuggestion>
          {previous === false ? null : (
            <>
              {previous && (
                <PostLink to={previous.fields.slug}>
                  <h3>{previous.frontmatter.title}</h3>
                  <small>{previous.frontmatter.date}</small>
                </PostLink>
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <PostLink to={next.fields.slug}>
                  <h3>{next.frontmatter.title}</h3>
                  <small>{next.frontmatter.date}</small>
                </PostLink>
              )}
            </>
          )}
        </PostSuggestion>
      </PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
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
      body
    }
  }
`
