import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"

import faceRecognitionDemo from "../images/face_to_emoji_demo.gif"

const Hero = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;
  padding: 24px 0;
  background-color: var(--yellow);
  border-bottom: 1px solid black;
`
const Card = styled.div`
  grid-column: 2/12;
  width: 100%;
  place-self: center center;
  display: grid;
  grid-template-rows: auto auto;
  gap: 32px;
  padding: 24px;
  border: solid 1px black;
  border-radius: 4px;
  h1 {
    font-size: 1.2em;
    font-weight: lighter;
    letter-spacing: 1px;
  }
  span {
    font-size: 1.5em;
    letter-spacing: 2px;
  }
`
const ContactButton = styled.a`
  grid-column: 2/12;
  background: none;
  width: 100%;
  background: none;
  border: solid 1px black;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  color: black;
  transition: background 0.5s, color 0.5s;
  &:hover {
    background: var(--carbon);
    color: var(--yellow);
    transition: 0.5s;
  }
`
const SectionTitle = styled.span`
  grid-column: 1/12;
  font-size: 1.8em;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 55%;
    bottom: 50%;
    width: 55%;
    height: 2px;
    background-color: black;
  }
`
const ProjectSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 16px;
`
const LearningSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 16px;
`
const ReadingSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 16px;
`
const ProjectWrapper = styled.div`
  grid-column: 1/13;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  padding: 24px 0;
`
const LearningWrapper = styled.div`
  grid-column: 1/13;
  padding: 24px 0;
`
const ReadingWrapper = styled.div`
  grid-column: 1/13;
  padding: 24px;
  a {
    color: purple;
  }
  a::before {
    content: "";
    font-size: 1.2em;
    opacity: 0;
    padding-right: 0;
    transition: 0.5s;
  }
  a:hover::before {
    content: ">";
    opacity: 1;
    padding-right: 4px;
    transition: 0.5s;
  }
`
const ProjectCard = styled.div`
  grid-column: 1/13;
  padding: 16px;
  border: solid 1px black;
  border-radius: 4px;
  box-shadow: 0px 4px 4px grey;
  a {
    color: purple;
  }
  a::before {
    content: "";
    font-size: 1.2em;
    opacity: 0;
    padding-right: 0;
    transition: 0.5s;
  }
  a:hover::before {
    content: ">";
    opacity: 1;
    padding-right: 4px;
    transition: 0.5s;
  }
`

const Thumbnail = styled(Img)`
  border-radius: 4px;
  border: 1px solid black;
`

function range(start, end) {
  if (start === end) return [start]
  return [start, ...range(start + 1, end)]
}

const BookRating = ({ rating }) => {
  const ratingRange = range(1, rating)
  return (
    <>
      {ratingRange.map(el => (
        <span role="img" key={el}>
          ⭐
        </span>
      ))}
    </>
  )
}

const IndexPage = () => {
  const readingList = [
    {
      title: "Steal Like An Artist",
      author: "Austin Kleon",
    },
    {
      title: "Illuminate",
      author: "Nancy Duarte",
    },
    {
      title: "The Personal MBA",
      author: "",
    },
  ]

  const readList = [
    {
      title: "Make Time",
      author: "Jake Knapp",
      rating: 5,
    },
    {
      title: "Bad Blood",
      author: "John Carreyrou",
      rating: 4,
    },
    {
      title: "The Courage To Be Disliked",
      author: "Ichiro Kishimi & Fumitake Koga",
      rating: 4,
    },
  ]

  const data = useStaticQuery(graphql`
    {
      flipsThumbnail: file(relativePath: { eq: "flips_thumbnail.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      kindleshareThumbnail: file(
        relativePath: { eq: "kindleshare_thumbnail.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      covidThumbnail: file(relativePath: { eq: "covid_thumbnail.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      geoThumbnail: file(relativePath: { eq: "geo_d3.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Achraf ASH" />
      <Hero>
        <Card>
          <h1>
            React <span role="img">⚛️</span> Frontend Developer
            <br />
            Engineering Student living in Paris <span role="img">🗼</span>
          </h1>
          <span>
            Bonjour 👋
            <br />
            I'm Achraf Ait Sidi Hammou (ASH)
          </span>
        </Card>
        <ContactButton
          target="_blank"
          href="mailto:aitsidihammou.achraf@gmail.com?subject=Hello"
        >
          Say Hello
        </ContactButton>
      </Hero>
      <ProjectSection id="projects">
        <SectionTitle>Projects</SectionTitle>
        <ProjectWrapper>
          <ProjectCard>
            <Thumbnail fluid={data.covidThumbnail.childImageSharp.fluid} />
            <br />
            <hr />
            <br />
            <div className="project-header">
              <h3>003. COVID-19 API & Dashboard</h3>
              <small>- April 2020</small>
            </div>
            <br />
            <div className="description">
              A GraphQL API for France COVID-19 data. I've added a React client
              to showcase what is possible to make with that API. <br />I used
              D3.js for Data Visualization
              <br />
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://covidfranceapi.herokuapp.com"
              >
                Check live
              </a>
            </div>
          </ProjectCard>
          <ProjectCard>
            <Thumbnail fluid={data.flipsThumbnail.childImageSharp.fluid} />
            <br />
            <hr />
            <br />
            <div className="project-header">
              <h3>002. Flips Landing Page</h3>
              <small>- March 2020</small>
            </div>
            <br />
            <div className="description">
              This is my first real-case project. I've met these two amazing
              students at my school who are building this really cool app called
              Flips. The point is to match like-minded students at an event on a
              common interest.
              <br />
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://flipsapp.fr"
              >
                Flips page
              </a>
            </div>
          </ProjectCard>
          <ProjectCard>
            <Thumbnail
              fluid={data.kindleshareThumbnail.childImageSharp.fluid}
            />
            <br />
            <hr />
            <br />
            <div className="project-header">
              <h3>001. KindleShare</h3>
              <small>- January 2020</small>
            </div>
            <br />
            <div className="description">
              My first project from scratch. This is a web app to:
              <ul>
                <li>see your Kindle ebooks</li>
                <li>browse through your Highlights</li>
                <li>share your thoughts and highlights</li>
                <li>explore inpiring people's libraries</li>
              </ul>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stark-savannah-46050.herokuapp.com/"
              >
                Discover it now <br />
                (id: test2@test.com | psw: test)
              </a>
            </div>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectSection>
      <LearningSection id="learn">
        <SectionTitle>Obsession</SectionTitle>
        <LearningWrapper>
          I'm currently hooked by Data Science. But that is what I want to
          study. What I'm currently learning (I mean on my own) is Data
          Visualization (D3.js) and Machine Learning in the browser
          (Tensorflow.js).
          <ProjectWrapper>
            <p style={{ gridColumn: "1/13" }}>
              Here are just a few recent projects:
            </p>
            <ProjectCard>
              <img src={faceRecognitionDemo} width="100%" />
              <h3 style={{ textAlign: "center" }}>
                Face recognition in the browser
              </h3>
            </ProjectCard>
            <ProjectCard>
              <Img fluid={data.geoThumbnail.childImageSharp.fluid} />
            </ProjectCard>
          </ProjectWrapper>
        </LearningWrapper>
      </LearningSection>
      <ReadingSection id="read">
        <SectionTitle>Library</SectionTitle>
        <ReadingWrapper>
          <span
            style={{ fontSize: "1.2em", lineHeight: "2", fontWeight: "bold" }}
          >
            Currently Reading
          </span>
          <ul className="reading-list" style={{ listStyleType: "📖" }}>
            {readingList &&
              readingList.map(book => (
                <li key={book.title}>
                  {book.title} - by {book.author}
                </li>
              ))}
          </ul>
          <span
            style={{ fontSize: "1.2em", lineHeight: "2", fontWeight: "bold" }}
          >
            Last Readings
          </span>
          <ul className="read-list">
            {readList &&
              readList.map(book => (
                <li key={book.title}>
                  {book.title} - by {book.author} -{" "}
                  <BookRating rating={book.rating} />
                </li>
              ))}
          </ul>
          <br />
          <Link to="/blog">Read my stuff</Link>
        </ReadingWrapper>
      </ReadingSection>
    </Layout>
  )
}
export default IndexPage
