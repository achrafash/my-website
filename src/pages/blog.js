import React from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import EmailForm from '../components/EmailForm';

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Achraf's Blog"
        description="French engineering student, maker, freelancer. I write about productivity, learning and I document my journey as a student trying to make it on the side."
      />
      <BlogSection>
        <Header
          title="A place for student makers, freelancers and entrepreneurs"
          description="I write every Sunday about freelancing, side projects, learning new skills, productivity, and all that good Jaz. If you’re a student take a look you might learn a few things (I hope 🤞)."
        />

        <BlogList>
          <EmailSection>
            <EmailForm />
          </EmailSection>
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
        </BlogList>
      </BlogSection>
    </Layout>
  );
};

const BlogSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  @media only screen and (min-width: 600px) {
    padding: 0px 32px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1600px;
    margin: 0 auto;
  }
`;
const EmailSection = styled.div`
  grid-column: span 1;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 760px) {
    grid-column: span 2;
  }
  @media only screen and (min-width: 820px) {
    grid-column: span 1;
  }
  @media only screen and (min-width: 1200px) {
    grid-column: span 2;
  }
  @media only screen and (min-width: 1420px) {
    grid-column: span 1;
  }
`;
const BlogList = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  @media only screen and (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media only screen and (min-width: 990px) {
    gap: 48px;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const PostWrapper = styled.div`
  max-width: 100%;
  padding-bottom: 24px;
  border-bottom: solid 1px white;
  h1 {
    font-family: var(--serif);
    font-size: 1.5em;
    padding: 16px 0;
  }
  p {
    font-family: var(--sans-serif);
    font-weight: lighter;
    padding: 8px 0;
    color: darkgrey;
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
`;

export const query = graphql`
  query {
    allBloggerPost(sort: { fields: childMdx___frontmatter___date, order: DESC }) {
      nodes {
        id
        childMdx {
          timeToRead
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;
