import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import seo from '../components/seo';
import Header from '../components/Header';

export default () => (
  <Layout>
    <seo
      title="About Achraf ASH"
      description="I'm a French Engineering Student at ENSTA Paris. I'd love to become and indie maker on my spare time. In the mean time I try to grow a freelance business in web and mobile development."
    />
    <Header
      title="About Me"
      description="I'm a French Engineering Student at ENSTA Paris. I'd love to become and indie maker on my spare time. In the mean time I try to grow a freelance business in web and mobile development."
    />
    <Container>
      Check me out:
      <ul>
        <li>
          on Twitter
          {` `}
          <a href="https://twitter.com/achrafnotashraf">@achrafnotashraf</a>
        </li>
        <li>
          on my <Link to="/">newsletter</Link> every Sunday. I share the behind-the-scenes of
          growing an online business as a student.
        </li>
        <li>
          on Youtube{' '}
          <a href="https://www.youtube.com/channel/UCEr3keCyAOz9AIoty_awezw">
            Startup from scratch
          </a>
          , I release a new video every week
        </li>
      </ul>
    </Container>
  </Layout>
);

const Container = styled.div`
  padding: 16px;
  font-family: var(--sans-serif);
  font-weight: lighter;
`;
