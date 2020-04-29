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
  padding: 40px 0px;
`
const PostTitle = styled.h1`
  width: 100%;
  padding: 16px;
  font-size: 2.5em;
  text-transform: capitalize;
  border-bottom: 1px solid lightgrey;
  @media only screen and (min-width: 600px) {
    width: 80%;
    justify-self: center;
  }
  @media only screen and (min-width: 990px) {
    padding: 16px 56px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
    justify-self: center;
  }
`
const MetaPost = styled.small`
  padding: 16px;
  text-transform: uppercase;
  color: darkgrey;
  @media only screen and (min-width: 600px) {
    width: 80%;
    justify-self: center;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
    justify-self: center;
  }
`
const Image = styled(Img)`
  max-height: 300px;
  width: 100%;
  place-self: center center;
  @media only screen and (min-width: 990px) {
    width: 80%;
    max-height: 400px;
    justify-self: center;
  }
  @media only screen and (min-width: 1200px) {
    max-height: 500px;
    max-width: 1100px;
  }
`

const PostContent = styled.div`
  width: 100%;
  line-height: 2;
  font-size: 1.2em;
  padding: 32px 16px;
  @media only screen and (min-width: 600px) {
    width: 80%;
    justify-self: center;
    padding: 32px 0;
  }
  @media only screen and (min-width: 990px) {
    max-width: 700px;
    justify-self: center;
  }
`
const PostSuggestion = styled.div`
  border-top: 1px solid lightgrey;
  padding: 40px 24px;
  text-transform: capitalize;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  @media only screen and (min-width: 600px) {
    width: 80%;
    justify-self: center;
  }
  @media only screen and (min-width: 990px) {
    padding: 40px 56px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
    justify-self: center;
  }
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
