import React from "react"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BlogSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 40px 16px;
  @media only screen and (min-width: 600px) {
    padding: 48px 32px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1600px;
    margin: 0 auto;
  }
`
const BlogHeader = styled.h2`
  width: 100%;
  font-size: 2.5em;
  font-family: var(--prata);
  text-align: center;
  font-weight: lighter;
  letter-spacing: 2px;
  padding: 8px;
  border-bottom: 2px solid rgb(232, 232, 232);
`
const BlogList = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  @media only screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media only screen and (min-width: 990px) {
    gap: 48px;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
  @media only screen and (min-width: 760px) {
    place-self: end stretch;
  }
`
// const Image = styled(Img)`
//   margin: 0 auto;
//   border-radius: 3px;
//   max-width: 600px;
//   max-height: 250px;
//   height: auto;
// `

export default ({ data }) => {
  return (
    <Layout>
      <SEO title={"Achraf's Blog"} />
      <BlogSection>
        <BlogHeader>Achraf's Blog</BlogHeader>
        <BlogList>
          {data.allBloggerPost.nodes.map(({ id, childMdx }) => (
            <PostWrapper key={id}>
              <Link to={childMdx.frontmatter.slug}>
                <h1>{childMdx.frontmatter.title}</h1>
                <small>
                  {childMdx.frontmatter.date} • {childMdx.timeToRead} min read
                </small>
                <p>{childMdx.excerpt}</p>
              </Link>
            </PostWrapper>
          ))}
        </BlogList>
      </BlogSection>
    </Layout>
  )
}

export const query = graphql`
  query {
    allBloggerPost(
      sort: { fields: childMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        childMdx {
          timeToRead
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`
