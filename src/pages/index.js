import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import "../components/index.scss"
import Layout from "../components/Layout"
import SEO from "../components/seo"

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
  return (
    <Layout>
      <SEO title="Achraf ASH" />
      <section id="hero" className="grid-col">
        <span>- Bonjour 👋</span>
        <h1>
          I'm Achraf,
          <br /> a React ⚛️ Developer 👨‍💻
          <br /> a Junior Entrepreneur👨🏻‍💼
          <br /> an Engineering Student in Paris 🗼 <br />
          all at the same time ⌚.
        </h1>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-wrapper">
          <div className="project" id="flips">
            <div className="project-header">
              <h3>003. Flips Landing Page</h3>
              <small>- March 2020</small>
            </div>
            <div className="description">
              <p>
                This my first real-life project. I've met two amazing students
                at my school who are building this really cool app called Flips.
                The point is to match like-minded students at an event of a
                common interst.
                <br />
                I immediately wanted to give them a helping-hand and the timing
                was perfect.
                <br /> Here is a preview of the projects:
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://flipsapp.fr"
                >
                  Flips page
                </a>
                .
              </p>
            </div>
            <div className="preview flips">here will be a preview</div>
          </div>
          <div className="project" id="20daysofcode">
            <div className="project-header">
              <h3>002. #20DaysOfCodeChallenge</h3>
              <small>- February 2020</small>
            </div>
            <div className="description">
              <p>
                The point of this challenge is to build something every single
                day for 20 days.
                <br />
                My goal is to learn lots of CSS tricks in a very short period of
                time.
                <br /> Here is a preview of the projects:
              </p>
              <p>
                I've shared them all on{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/achrafash3"
                >
                  Twitter
                </a>
                .
              </p>
            </div>
            <div className="preview 20daysofcode">here will be a preview</div>
          </div>
          <div className="project" id="kindleshare">
            <div className="project-header">
              <h3>001. KindleShare</h3>
              <small>- January 2020</small>
            </div>
            <div className="description">
              <p>This is a web app to:</p>
              <ul>
                <li>see your Kindle ebooks</li>
                <li>browse through your Highlights</li>
                <li>share your thoughts and highlights</li>
                <li>explore your most inpiring people's libraries</li>
              </ul>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://stark-savannah-46050.herokuapp.com/"
              >
                You can play with it now
              </a>
            </div>
            <div className="preview kindleshare">here will be a preview</div>
          </div>
        </div>
      </section>
      <section id="learn">
        <h2>Currently Learning</h2>
        <div className="learn-wrapper">
          <p>
            I'm currently hooked by Data Science. But that is what I want to
            study. What I'm currently learning (I mean on my own) is Data
            Visualization and Machine Learning in the browser (ie with
            Javascript)
          </p>
          <span>Here are a few recent projects I went through</span>
          <div className="carousel" id="learn-projects">
            <div className="project">bar chart racing</div>
            <div className="project">
              machine learning and data visualization (Are you here ?)
            </div>
            <div className="project">
              Some world map kind of data visualization
            </div>
          </div>
        </div>
      </section>
      <section id="read">
        <h2>Library</h2>
        <div className="library-wrapper">
          <span className="header">Currently Reading</span>
          <ul className="reading-list">
            {readingList &&
              readingList.map(book => (
                <li key={book.title}>
                  {book.title} - by {book.author}
                </li>
              ))}
          </ul>
          <span className="header">Latest Readings</span>
          <ul className="read-list">
            {readList &&
              readList.map(book => (
                <li key={book.title}>
                  {book.title} - by {book.author} -{" "}
                  <BookRating rating={book.rating} />
                </li>
              ))}
          </ul>
          <Link to="/blog">Read my stuff ></Link>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
