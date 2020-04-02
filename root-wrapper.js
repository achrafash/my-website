import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
  h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
  "p.inlineCode": props => (
    <code {...props} style={{ backgroundColor: "lightgrey" }} />
  ),
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
