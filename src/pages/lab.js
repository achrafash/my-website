import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import SEO from '../components/seo';

export default () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
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
        <Container>
          <h1>Freelancing</h1>
          <ul>
            <li>
              <Link to="blog/freelance-business-for-students">
                How to start a freelance business while being a full-time student
              </Link>
            </li>
          </ul>
        </Container>
        <Container>
          <h1>Side Projects</h1>
          <ul>
            <li>
              <Link to="/blog/quick-easy-way-to-validate-ideas">
                Quick and easy way to validate an idea
              </Link>
            </li>
            <li>
              {' '}
              In 2021 we reach{' '}
              <a
                href="http://www.paulgraham.com/ramenprofitable.html"
                target="_blank"
                rel="noreferrer nofollow noopener"
              >
                ramen profitability
              </a>
              !
              <Tweet />
            </li>
          </ul>
        </Container>
        <Container>
          <h1>Learning new skills</h1>
          <ul>
            <li>Machine learning (pytorch)</li>
            <li>Microservices Architecture: load balancing, containers, clusters, ...</li>
            <li>
              C++: data handling, machine learning. Goal: building a database software from scratch!
            </li>
          </ul>
        </Container>
        <Container>
          <h1>To Ship List</h1>
          Here is the list of projects I want to ship before the end of 2021:
          <br />
          <input type="checkbox" checked={true} /> A slick UI/UX To-Do App (
          <a href="https://taffeur.achrafash.me" target="_blank" rel="noreferrer noopener">
            taffeur
          </a>
          )
          <br />
          <input type="checkbox" checked={true} /> An API to evaluate pronunciation / plugin for
          education platforms #deeplearning #edtech (
          <a href="speakfluent.vercel.app" target="_blank" rel="noreferrer noopener">
            speakfluent.li
          </a>
          )
          <br />
          <input type="checkbox" checked={true} /> A translation widget to add on your website
          (@transltr)
          <br />
          <input type="checkbox" checked={false} /> A machine learning no-code tool: drag and drop,
          plug to other apps like spreadsheets, CRMs...
          <br />
          <input type="checkbox" checked={false} /> An onboarding/support chatbot for small teams,
          solofounders and bootstrappers
          <br />
          <input type="checkbox" checked={false} /> A health app to replace heatlth notebook and a
          solution for all health-related problems (tracking, drugs reminders, documents, news...)
          (@Milo)
          <br />
          <input type="checkbox" checked={false} /> Chrome extension to use custom css and keyboard
          shortcut with a marketplace
          <br />
          <input type="checkbox" checked={false} /> leboncoin-like platform for students to sell
          services/notes/tutoring and everything school-related
          <br />
          <input type="checkbox" checked={false} /> MenuNextDoor copycat for uni campus
        </Container>
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
    font-size: 1.5em;
    padding: 8px 0;
  }
  p,
  strong {
    padding-top: 8px;
    font-size: 1em;
  }
  ul,
  ol {
    padding: 8px;
    font-size: 1em;
  }
`;

const Tweet = () => (
  <blockquote className="twitter-tweet">
    <p lang="fr" dir="ltr">
      Pour moi 1000€ de MRR avant le 31/12/2021!
      <br />
      ca me suffira à payer ma vie d&#39;étudiant 🍜
    </p>
    &mdash; Achraf ASH (@achrafnotashraf){' '}
    <a href="https://twitter.com/achrafnotashraf/status/1280865488902512646?ref_src=twsrc%5Etfw">
      July 8, 2020
    </a>
  </blockquote>
);
