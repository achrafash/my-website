import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Achraf ASH" />
      <section id="hero">
        <span>Bonjour.</span>
        <h1>
          I'm Achraf,
          <br /> a Web Developer,
          <br /> a Junior Entrepreneur,
          <br /> an Engineering Student in Paris 🗼 <br />
          all at the same time.
        </h1>
      </section>
      <section id="work">
        <h2>Works</h2>
        <hr />
        <div className="project" id="kindleshare">
          <h3>003. Flips Landing Page</h3>
          <small>- March 2020</small>
          <p>
            This my first real-life project. I've met two amazing students at my
            school who are building this really cool app called Flips. The point
            is to match like-minded students at an event of a common interst.
            <br />
            I immediately wanted to give them a helping-hand and the timing was
            perfect.
            <br /> Here is a preview of the projects:
          </p>
          <div className="preview-20daysofcode"></div>
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
        <div className="project" id="kindleshare">
          <h3>002. #20DaysOfCodeChallenge</h3>
          <small>- February 2020</small>
          <p>
            The point of this challenge is to build something every single day
            for 20 days.
            <br />
            My goal is to learn lots of CSS tricks in a very short period of
            time.
            <br /> Here is a preview of the projects:
          </p>
          <div className="preview-20daysofcode"></div>
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
        <div className="project" id="kindleshare">
          <h3>001. KindleShare</h3>
          <small>- January 2020</small>
          <p>This is a web app to:</p>
          <ul>
            <li>see your Kindle ebooks</li>
            <li>browse through your Highlights</li>
            <li>share your thoughts and highlights</li>
            <li>explore your most inpiring people's libraries</li>
          </ul>
        </div>
      </section>
      <section id="learn">
        <h2>Currently Learning</h2>
        <hr />
        <p>
          I'm currently hooked by Data Science. But that is what I want to
          study. What I'm currently learning (I mean on my own) is Data
          Visualization and Machine Learning in the browser (ie with Javascript)
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
      </section>
      <section id="read">
        <h2>Currently Reading</h2>
        <hr />
        <div className="current-book">
          Steal Like An Artist - Austin Kleon
          <br />
          Rating so far: 5/5 stars
        </div>
        <div className="current-book">
          The Personal MBA
          <br />
          Rating so far: 2/5 stars
        </div>
        <Link to="/blog">Read my writings ></Link>
      </section>
    </Layout>
  )
}
export default IndexPage
