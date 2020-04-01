import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

export default ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <small>{frontmatter.date}</small>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`
