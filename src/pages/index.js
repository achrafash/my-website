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
  border-bottom: 1px solid black;
  background-color: var(--mainColor);
  box-shadow: 0px 1px 2px var(--shadow);
  transition: background-color 0.5s, box-shadow 0.5s;
  @media only screen and (min-width: 990px) {
    padding: 40px 2vw;
  }
  @media only screen and (min-width: 1200px) {
    padding: 40px 5vw;
  }
`
const HeroCard = styled.div`
  grid-column: 2/12;
  place-self: center start;
  width: 100%;
  max-width: 500px;
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
  @media only screen and (min-width: 990px) {
    grid-column: 2/6;
    place-self: stretch end;
  }
`
const ContactButton = styled.a`
  grid-column: 2/12;
  place-self: center start;
  width: 100%;
  max-width: 500px;
  background: none;
  border: solid 1px black;
  border-radius: 4px;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  color: var(--fontColor);
  transition: background 0.5s, color 0.5s;
  &:hover {
    background: var(--secondaryColor);
    color: var(--fontNegativeColor);
    transition: 0.5s;
  }
  @media only screen and (min-width: 990px) {
    grid-column: 2/6;
    place-self: start end;
    padding: 16px;
  }
`
const SectionTitle = styled.span`
  grid-column: 1/13;
  font-size: 1.8em;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 50%;
    width: 40%;
    height: 1px;
    background-color: black;
  }
  @media only screen and (min-width: 600px) {
    &::after {
      width: 70%;
    }
  }
`
const ProjectSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 16px;
  max-width: 1600px;
  margin: 0 auto;
`
const LearningSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 16px;
  max-width: 1600px;
  margin: 0 auto;
`
const ReadingSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 16px;
  max-width: 1600px;
  margin: 0 auto;
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
    color: var(--link);
    transition: color 0.5s;
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
  place-self: center center;
  width: 100%;
  max-width: 500px;
  padding: 16px;
  border: solid 1px black;
  border-radius: 4px;
  box-shadow: 0px 4px 4px var(--shadow);
  transition: box-shadow 0.5s;
  a {
    color: var(--link);
    transition: color 0.5s;
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
  small {
    text-transform: uppercase;
    font-weight: lighter;
    font-size: 0.7em;
    color: grey;
  }
  @media only screen and (min-width: 990px) {
    grid-column: span 6;
    align-self: stretch;
  }
  @media only screen and (min-width: 990px) {
    grid-column: span 4;
    align-self: stretch;
  }
`

const Thumbnail = styled(Img)`
  border-radius: 4px;
  border: 1px solid black;
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 10;
    height: 100%;
    width: 100%;
    background: var(--carbon);
    opacity: 0.5;
    transition: opacity 0.5s;
  }
  &:hover::before {
    opacity: 0.1;
    transition: opacity 0.5s;
  }
`
const HeroPic = styled(Img)`
  display: none;
  @media only screen and (min-width: 990px) {
    display: block;
    grid-column: 7/12;
    grid-row: 1/3;
    border: 2px solid black;
    border-radius: 4px;
    transform: translateY(56px);
    box-shadow: 0px 4px 4px var(--shadow);
    transition: box-shadow 0.5s;
    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: 10;
      height: 100%;
      width: 100%;
      background: var(--carbon);
      opacity: 0.5;
      transition: opacity 0.5s;
    }
    &:hover::before {
      opacity: 0.1;
      transition: opacity 0.5s;
    }
  }
`
const Angle = styled.div`
  display: none;
  @media only screen and (min-width: 990px) {
    display: block;
    grid-column: 12/13;
    grid-row: 1;
    place-self: start start;
    width: 100%;
    height: 8vw;
    transform: translateX(-50%);
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-radius: 2px;
  }
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
      heroPic: file(relativePath: { eq: "AGP.JPG" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Achraf ASH"
        description="French engineering student, maker, freelancer, looking to help you kickstart your activity with awesome websites, web apps and mobile apps."
      />
      <Hero>
        <HeroCard>
          <h1>
            React <span role="img">⚛️</span> Developer
            <br />
            Engineering Student living in Paris <span role="img">🗼</span>
          </h1>
          <span>
            Bonjour 👋
            <br />
            I'm Achraf Ait Sidi Hammou (ASH)
          </span>
        </HeroCard>
        <ContactButton
          target="_blank"
          href="mailto:aitsidihammou.achraf@gmail.com?subject=Hello"
        >
          Say Hello!
        </ContactButton>
        <HeroPic fluid={data.heroPic.childImageSharp.fluid} />
        <Angle />
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
                href="https://kindleshare.herokuapp.com/"
              >
                Discover it now (id: test2@test.com | psw: test)
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
