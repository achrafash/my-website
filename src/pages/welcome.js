import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styled from 'styled-components';

export default () => (
  <Layout>
    <Header
      title="Welcome to the newsletter 🎉"
      description="Hi friend! Thank you for joining. You just got on board for a very exciting journey 🤸"
    />
    <Container>
      And while you here you might as well check me over on Twitter{' '}
      <a href="https://twitter.com/achrafnotashraf" target="_blank" rel="noopener noreferrer">
        @achrafnotashraf
      </a>{' '}
      and on Youtube{' '}
      <a
        href="https://www.youtube.com/channel/UCEr3keCyAOz9AIoty_awezw"
        target="_blank"
        rel="noopener noreferrer"
      >
        @StartupfromScratch
      </a>
    </Container>
  </Layout>
);

const Container = styled.div`
  padding: 16px;
  font-family: var(--sans-serif);
  font-weight: lighter;
  font-size: 0.8em;
`;
