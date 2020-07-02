import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import SEO from '../components/seo';

export default () => {
  return (
    <Layout>
      <SEO
        title="Welcome to the Lab"
        description="Find my latest and on going projects along with the whole process to help you get started with student entrepreneurship"
      />
      <Header
        title="Welcome to the Lab!"
        description="I’m on a journey to grow side projects while being a full-time student. I'll try to document the whole process to share it with you."
      />
      <Container>
        {/* <Container>
          <h1>Freelancing</h1>
          <Link to="blog/freelance-business-for-students">
            How to start a freelance business while being a full-time student
          </Link>
          <h1>Learning a new skill</h1>
          <p>I want to try something new!</p>
          <p>
            After blogging for almost a year now, I realized how difficult and yet powerful writing
            is. So I've been wanting to craft my copywriting skills for a while now. But learning
            without an endgoal isn't funny at all...
          </p>
          <p>
            <strong>But now I have one: selling copywriting services online.</strong>
          </p>
          <p>Here's what I want to do:</p>
          <ol>
            <li>enroll in skillshare courses on copywriting</li>
            <li>practicing a ton to get better and build a portfolio</li>
            <li>selling copywriting gigs on Fiverr.</li>
          </ol>
        </Container>
        <Container>
          <h1>Side Projects</h1>
          <h2>An easy and quick way to validate your next idea</h2>
          <p>
            Post a Form on any forum to ask people if they are excited about your idea. I think the
            best platform to do that is Reddit. Just because you can find a subreddit for anything
            you can think of.
          </p>
          <p>
            I've tried the method only once so far. The result was negative but far from being
            disappointing.
          </p>
          <p>I'll write a quick blog post to share everything with you.</p>
        </Container> */}
        I'm working on it 👨‍💻
        <br />
        It's coming soon...
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  padding: 16px;
  font-family: var(--sans-serif);
  font-weight: lighter;
  max-width: 1200px;
  h1,
  h2 {
    font-family: var(--serif);
    padding: 8px 0;
  }
  p,
  strong {
    padding-top: 8px;
  }
  ul,
  ol {
    padding: 8px;
  }
`;
