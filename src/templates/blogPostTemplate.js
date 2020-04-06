import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import styled from "styled-components"
import Img from "gatsby-image"

const PostWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 100px 10px;
`
const PostTitle = styled.h1`
  width: 100%;
  padding: 16px 48px;
  font-size: 36px;
  text-transform: capitalize;
  border-bottom: 2px solid rgb(232, 232, 232);
  @media screen and (max-width: 500px) {
    padding: 16px;
  }
`
const MetaPost = styled.small`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
`
const Image = styled(Img)`
  padding: 48px;
  margin: 24px 0;
  z-index: -1;
`
const PostContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px;
  @media screen and (max-width: 500px) {
    padding: 48px 16px;
  }
`
const PostSuggestion = styled.div`
  border-top: 2px solid rgb(232, 232, 232);
  padding: 48px 24px 0 24px;
  text-transform: capitalize;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
`
const PostLink = styled(Link)`
  color: black;
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
