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
// const Image = styled(Img)`
//   max-height: 300px;
//   width: 100%;
//   place-self: center center;
//   @media only screen and (min-width: 990px) {
//     width: 80%;
//     max-height: 400px;
//     justify-self: center;
//   }
//   @media only screen and (min-width: 1200px) {
//     max-height: 500px;
//     max-width: 1100px;
//   }
// `

const PostContent = styled.div`
  max-width: 100vw;
  line-height: 1.5;
  font-size: 1em;
  padding: 32px 16px;
  h3,
  h2,
  h1 {
    font-size: 1.5em;
    margin: 0.5em 0;
    line-height: 1.2;
    max-width: 100%;
  }
  p img {
    max-width: 100%;
    padding: 24px;
    margin: 0 auto;
  }
  a {
    text-decoration: underline;
    color: var(--fontColor);
    transition: color 0.5s;
    max-width: 100%;
  }
  p,
  ul {
    padding-bottom: 1em;
    max-width: 100%;
  }
  h2 img {
    width: 100vw;
    transform: translateX(-16px);
  }
  @media only screen and (min-width: 600px) {
    padding: 32px 10%;
    h2 img {
      transform: translateX(-10%);
    }
  }
  @media only screen and (min-width: 990px) {
    max-width: 700px;
    justify-self: center;
    padding: 32px 0;
    h2 img {
      width: 100%;
      transform: translateX(0);
      transition: width 0.5s;
    }
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
    color: var(--fontColor);
    transition: color 0.5s;
    font-size: 1.5em;
  }
  small {
    padding-top: 8px;
    text-transform: uppercase;
    color: darkgrey;
  }
`

export default ({ data, pageContext }) => {
  const { timeToRead, body, frontmatter } = data.bloggerPost.childMdx
  const { previous, next } = pageContext
  console.log(pageContext)
  return (
    <Layout>
      <PostWrapper>
        <PostTitle>{frontmatter.title}</PostTitle>
        <MetaPost>
          {frontmatter.date} - {timeToRead} min read
        </MetaPost>
        <PostContent>
          <MDXRenderer>{body}</MDXRenderer>
        </PostContent>
        <PostSuggestion>
          {next === false ? null : (
            <>
              {next && (
                <PostLink to={next.slug}>
                  <h3>{next.childMdx.frontmatter.title}</h3>
                  <small>
                    {next.childMdx.frontmatter.date} •{" "}
                    {next.childMdx.timeToRead} min read
                  </small>
                </PostLink>
              )}
            </>
          )}
          {previous === false ? null : (
            <>
              {previous && (
                <PostLink to={previous.slug}>
                  <h3>{previous.childMdx.frontmatter.title}</h3>
                  <small>
                    {previous.childMdx.frontmatter.date} •{" "}
                    {previous.childMdx.timeToRead} min read
                  </small>
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
    bloggerPost(childMdx: { frontmatter: { slug: { eq: $slug } } }) {
      childMdx {
        timeToRead
        body
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
