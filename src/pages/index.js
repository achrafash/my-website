import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import ProjectModal from '../components/ProjectModal'
import EmailForm from '../components/EmailForm'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      flipsThumbnail: file(relativePath: { eq: "flips_thumbnail.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      flipsAbout: file(relativePath: { eq: "flipsapp-about.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      flipsApp: file(relativePath: { eq: "flipsapp-app.png" }) {
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
      heroPic: file(relativePath: { eq: "AGP.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      allBloggerPost(
        limit: 3
        sort: { fields: childMdx___frontmatter___date, order: DESC }
      ) {
        nodes {
          id
          childMdx {
            timeToRead
            excerpt(pruneLength: 150)
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              slug
            }
          }
        }
      }
    }
  `)

  const projects = [
    {
      title: 'France COVID API & Dashboard - April 2020',
      subtitle: 'GraphQL API & D3 Visualization',
      thumbnail: data.covidThumbnail.childImageSharp.fluid,
      description:
        "A GraphQL API for France COVID-19 images. I've added a React client to showcase what is possible to make with that API. I used D3.js for images Visualization.",
      link: 'http://covidfranceapi.herokuapp.com',
    },
    {
      title: 'Flips - March 2020',
      subtitle: 'Fast & responsive Landing Page',
      thumbnail: data.flipsThumbnail.childImageSharp.fluid,
      description:
        "This is my first real-case project. I've met these two amazing students at my school who are building this really cool app called Flips. The point is to match like-minded students at an event on a common interest.",
      link: 'https://flipsapp.fr',
      images: [
        data.flipsAbout.childImageSharp.fluid,
        data.flipsApp.childImageSharp.fluid,
      ],
    },
    {
      title: 'KindleShare - January 2020',
      subtitle: 'Web App',
      thumbnail: data.kindleshareThumbnail.childImageSharp.fluid,
      description:
        "My first project from scratch. This is a web app to: see your Kindle ebooks, browse through your Highlights, share your thoughts and highlights, explore inpiring people's libraries. Discover it now (id: test2@test.com | pwd: test)",
      link: 'http://kindleshare.herokuapp.com',
    },
  ]

  return (
    <Layout>
      <SEO
        title="Achraf ASH"
        description="French engineering student, maker, freelancer, looking to help you kickstart your activity with awesome websites, web apps and mobile apps."
      />
      <Hero>
        <HeroText>
          <Fade top>
            <h1>
              Bonjour 👋
              <br />
              I'm Achraf Ait Sidi Hammou (ASH)
            </h1>
            <h1>
              Student.
              <br />
              Freelance.
              <br />
              Maker.
            </h1>
            <ContactButton
              target="_blank"
              href="mailto:aitsidihammou.achraf@gmail.com?subject=Hello"
            >
              Say Hello
            </ContactButton>
          </Fade>
        </HeroText>
        <BackShape />
        <HeroImage>
          <Fade right>
            <HeroPic fluid={data.heroPic.childImageSharp.fluid} />
          </Fade>
        </HeroImage>
      </Hero>
      <ProjectSection id="projects">
        {projects &&
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              subtitle={project.subtitle}
              images={project.images}
              description={project.description}
              link={project.link}
            />
          ))}
      </ProjectSection>
      <BlogSection>
        {data.allBloggerPost.nodes.map(({ id, childMdx }) => (
          <PostWrapper key={id}>
            <Link to={`blog/${childMdx.frontmatter.slug}`}>
              <h1>{childMdx.frontmatter.title}</h1>
              <small>
                {childMdx.frontmatter.date} • {childMdx.timeToRead} min read
              </small>
              <p>{childMdx.excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </BlogSection>
      <EmailSection>
        <Fade right>
          <EmailForm />
        </Fade>
      </EmailSection>
    </Layout>
  )
}
export default IndexPage

const Hero = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 24px 0;
  background-color: var(--mainColor);
  box-shadow: 0px 1px 2px var(--shadow);
  transition: background-color 0.5s, box-shadow 0.5s;
  @media only screen and (min-width: 990px) {
    padding: 40px 40px 120px 40px;
    grid-template-columns: 1fr 1fr;
  }
`
const HeroText = styled.div`
  grid-column: 2;
  width: 100%;
  max-width: 500px;
  max-height: 300px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 32px;
  padding: 24px 0;
  border-radius: 4px;
  h1:first-child {
    font-family: var(--sans-serif);
    font-size: 1.2em;
    font-weight: lighter;
    letter-spacing: 1px;
  }
  h1:last-child {
    font-family: var(--serif);
    font-size: 1.5em;
    font-style: italic;
  }
  .react-reveal:last-child {
    place-self: center start;
  }
  @media only screen and (min-width: 990px) {
    grid-column: 1;
    place-self: center end;
  }
`
const ContactButton = styled.a`
  grid-row: 3;
  background-color: var(--black);
  color: var(--fontNegativeColor);
  padding: 8px 16px;
  text-align: center;
  font-family: var(--sans-serif);
  font-size: 1.2em;
  transition: background 0.3s;
  &:hover {
    background: var(--coral);
    color: var(--fontNegativeColor);
    transition: 0.3s;
  }
  @media only screen and (min-width: 990px) {
    padding: 16px;
  }
`
const ProjectSection = styled.section`
  width: 100%;
  max-width: 1350px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin: 0 auto;
  padding: 16px;
  border-top: solid 1px white;
  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 16px;
  }
  @media only screen and (min-width: 860px) {
    padding: 40px;
    grid-template-columns: repeat(3, 1fr);
  }
`
const ProjectCard = ({
  thumbnail,
  title,
  subtitle,
  images,
  description,
  link,
}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <ProjectThumbnail>
      <div onClick={() => setToggle(!toggle)}>
        <Fade bottom>
          <Thumbnail fluid={thumbnail} />
        </Fade>
      </div>
      <ProjectModal
        thumbnail={thumbnail}
        title={title}
        subtitle={subtitle}
        images={images}
        description={description}
        link={link}
        toggle={toggle}
        setToggle={setToggle}
      />
    </ProjectThumbnail>
  )
}

const ProjectThumbnail = styled.div`
  place-self: start center;
  width: 100%;
  max-width: 500px;
  a {
    transition: color 0.5s;
  }
`

const Thumbnail = styled(Img)`
  cursor: pointer;
  &::before {
    content: '';
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
const HeroImage = styled.div`
  display: none;
  @media only screen and (min-width: 990px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column: 2;
    grid-row: 1;
  }
`
const HeroPic = styled(Img)`
  display: block;
  grid-column: 1;
  grid-row: 1;
  max-height: 400px;
  max-width: 600px;
  &::before {
    content: '';
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
const BackShape = styled.div`
  display: none;
  @media only screen and (min-width: 990px) {
    display: block;
    grid-column: 2;
    grid-row: 1;
    background: var(--coral);
    width: 100%;
    height: calc(100% + 2 * 80px);
    place-self: start start;
    transform: translate(40px, -80px);
  }
`
const EmailSection = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const BlogSection = styled.div`
  width: 100%;
  max-width: 1350px;
  height: 100%;
  padding: 16px;
  margin: 0 auto;
  border-bottom: solid 1px white;
  border-top: solid 1px white;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  div:first-of-type {
    background-color: var(--carbon);
    p,
    h1 {
      color: white;
    }
    h1:hover {
      color: var(--coral);
    }
  }
  div:last-of-type {
    background-color: white;
  }
  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 16px;
  }
  @media only screen and (min-width: 860px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
  }
`
const PostWrapper = styled.div`
  max-width: 100%;
  padding: 32px;
  h1 {
    font-family: var(--serif);
    font-size: 1.5em;
    padding: 16px 0;
  }
  p {
    font-family: var(--sans-serif);
    font-weight: lighter;
    padding: 8px 0;
    color: black;
    line-height: 1.5;
  }
  small {
    font-family: var(--serif);
    text-transform: uppercase;
    color: darkgrey;
  }
  @media only screen and (min-width: 760px) {
    place-self: start stretch;
    height: 100%;
  }
`
