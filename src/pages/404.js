import React, { useEffect } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location = "/"
      }
    }, 2000)
  }, [])
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div
        style={{
          minHeight: "75vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness...</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
