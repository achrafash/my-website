import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"

export default () => {
  return (
    <Layout>
      <Header
        title="Welcome to the Lab!"
        description="I’m on a journey to grow side projects as a student. I document the process to share what I learn with other students."
      />
      <p style={{ fontFamily: "var(--sans-serif)", padding: "16px" }}>
        coming soon...
      </p>
    </Layout>
  )
}
