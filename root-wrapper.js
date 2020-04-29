import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import Img from "gatsby-image"

// This is where you styled Markdown for blog posts
const components = {
  h2: ({ children }) => <h2 style={{ lineHeight: "3" }}>{children}</h2>,
  Link,
  Img,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
