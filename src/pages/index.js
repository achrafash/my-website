import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

function useInterval(callback, delay) {
  const savedCallback = useRef()
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const IndexPage = () => {
  const text = ["Landing Page ", "Portfolio ", "Prototype "]
  const [letter, setLetter] = useState("")
  const [counter, setCounter] = useState(0)
  const [index, setIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")

  useInterval(() => {
    setCurrentText(text[counter])
    setIndex(index + 1)
    setLetter(currentText.slice(0, index))
    if (letter.length == currentText.length) {
      setLetter("")
      setCounter((counter + 1) % 3)
      setIndex(0)
    }
  }, 200)

  const data = useStaticQuery(graphql`
    {
      profile: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(duotone: { highlight: "#F2C94C", shadow: "#000000" }) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Achraf ASH" />
      <div className="wrapper home">
        <h2>
          Développeur Web
          <br />
          Étudiant-Indépendant
        </h2>
        <h4>{letter}</h4>
        <div className="profile-img">
          <svg className="circle"></svg>
          <Img fluid={data.profile.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
