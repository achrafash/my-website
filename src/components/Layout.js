import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import styled from 'styled-components';

import Navbar from './Navbar';
import '../index.css';

const Layout = ({ children }) => {
  const links = [
    {
      path: '/',
      name: '🏠 Home'
    },
    {
      path: '/#projects',
      name: '🚀 Projects'
    },
    {
      path: '/about',
      name: '👨‍ About'
    },
    {
      path: '/lab',
      name: '🔬 Lab'
    },
    {
      path: '/blog',
      name: '🗞 Blog'
    }
  ];
  return (
    <>
      <Helmet>
        <meta
          name="google-site-verification"
          content="I0evl492iQy9Riwn26U7cL2B0LchCQC7N2niZRXr5HE"
        />
      </Helmet>
      <Navbar links={links} />
      <MainContainer>{children}</MainContainer>
      <Footer>
        <div className="navigation">
          <ul>
            {links &&
              links.map(link => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name.slice(3)}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="social">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/achrafnotashraf"
              >
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/achraf-aitsidihammou"
              >
                <IoLogoLinkedin />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/achrafash">
                <IoLogoGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:aitsidihammou.achraf@gmail.com?subject=Hello"
              >
                <IoMdMail />
              </a>
            </li>
          </ul>
        </div>
        <small>
          {`© `}
          {new Date().getFullYear()}
          {` - `}
          Built with ❤️ by Achraf ASH
        </small>
      </Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

const MainContainer = styled.main`
  margin: 0;
  padding: 40px 0 24px;
  background-color: var(--background);
  color: var(--fontColor);
  transition: color 0.5s, background-color 0.5s;
  @media only screen and (min-width: 990px) {
    padding-left: 200px;
  }
`;

const Footer = styled.footer`
  background-color: var(--white);
  ul {
    padding: 8px 0 0 0;
    list-style-type: none;
  }
  color: var(--fontColor);
  width: 100%;
  padding: 24px 8px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  .navigation {
    grid-column: 2/6;
    text-align: right;
    text-transform: capitalize;
    font-family: var(--sans-serif);
    letter-spacing: 2px;
    a {
      color: var(--fontColor);
      line-height: 1.5;
    }
    a:hover {
      color: var(--coral);
    }
  }
  .social {
    grid-column: 7/12;
    text-align: left;
    a {
      color: var(--fontColor);
      font-size: 1.8em;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 150px;
    }
    svg:hover {
      color: var(--coral);
    }
  }
  small {
    font-family: var(--sans-serif);
    text-transform: uppercase;
    text-align: center;
    font-size: 0.8em;
    padding: 24px 0 0 0;
    grid-column: 2/12;
    width: 100%;
  }
  @media only screen and (min-width: 990px) {
    .navigation ul {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      max-width: 400px;
      margin: 0 0 0 auto;
    }
  }
`;
