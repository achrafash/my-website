import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';

export default ({ data, pageContext }) => {
  const post = data.mdx;
  const { timeToRead, body, frontmatter } = post;
  const { previous, next } = pageContext;
  const [claps, setClaps] = useState(12);
  const [newClaps, setNewClaps] = useState(0);

  const clapHandler = e => {
    e.preventDefault();
    setClaps(claps + 1);
    setNewClaps(newClaps + 1);
    // add a +1 / +2 ... => requires memoization!
  };

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={post.excerpt}
        keywords={frontmatter.tags}
        canonical={`https://achrafash.me/blog${post.fields.slug}`}
      />
      <PostWrapper>
        <Back to="/blog">{'<'} Back to Blog</Back>
        <PostTitle>{frontmatter.title}</PostTitle>
        <MetaPost>
          {frontmatter.date} • {timeToRead} min read
        </MetaPost>
        <PostContent>
          <MDXRenderer>{body}</MDXRenderer>
          <br />
          {frontmatter.tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
          <Claps newClaps={newClaps}>
            <button onClick={clapHandler}>👏</button>
            {claps} claps
          </Claps>
        </PostContent>
        <PostSuggestion>
          {next === false ? null : (
            <>
              {next && (
                <PostLink to={`blog${next.fields.slug}`}>
                  <p>{'<'} next post</p>
                  <h3>{next.frontmatter.title}</h3>
                  <small>
                    {next.frontmatter.date} • {next.timeToRead} min read
                  </small>
                </PostLink>
              )}
            </>
          )}
          {previous === false ? null : (
            <>
              {previous && (
                <PostLink to={`blog${previous.fields.slug}`}>
                  <p>previous post {'>'}</p>
                  <h3>{previous.frontmatter.title}</h3>
                  <small>
                    {previous.frontmatter.date} • {previous.timeToRead} min read
                  </small>
                </PostLink>
              )}
            </>
          )}
        </PostSuggestion>
      </PostWrapper>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      timeToRead
      body
      excerpt(pruneLength: 250)
      frontmatter {
        date(fromNow: true)
        title
        tags
      }
      fields {
        slug
      }
    }
  }
`;

const PostWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 40px 0 0 0;
`;
const PostTitle = styled.h1`
  width: 100%;
  padding: 16px;
  font-family: var(--serif);
  font-size: 2.5em;
  text-transform: capitalize;
  border-bottom: 1px solid lightgrey;
  @media only screen and (min-width: 600px) {
    width: 80%;
    justify-self: center;
  }
  @media only screen and (min-width: 990px) {
    padding: 16px 56px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
    justify-self: center;
  }
`;
const MetaPost = styled.small`
  padding: 16px;
  text-transform: uppercase;
  color: darkgrey;
  @media only screen and (min-width: 600px) {
    width: 80%;
    justify-self: center;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
    justify-self: center;
  }
`;
const Back = styled(Link)`
  font-family: var(--sans-serif);
  font-weight: lighter;
  font-size: 0.8em;
  padding: 0 0 16px 16px;
  width: 100%;
  max-width: 800px;
  justify-self: center;
`;
const PostContent = styled.div`
  max-width: 100vw;
  line-height: 1.5;
  font-size: 1em;
  padding: 0px 16px 32px 16px;
  font-family: var(--sans-serif);
  font-weight: lighter;
  h3,
  h2,
  h1 {
    font-size: 1.5em;
    margin: 0.5em 0;
    line-height: 1.2;
    max-width: 100%;
  }
  p img {
    max-width: 100%;
    padding: 24px;
    margin: 0 auto;
  }
  a {
    color: grey;
    transition: color 0.5s;
    max-width: 100%;
  }
  a:hover {
    color: var(--link);
  }
  p,
  ul {
    margin-bottom: 1em;
    max-width: 100%;
  }
  h2 img {
    width: 100vw;
    transform: translateX(-16px);
  }
  blockquote {
    padding-left: 16px;
    border-left: 4px solid var(--coral);
    font-style: italic;
    color: grey;
  }
  @media only screen and (min-width: 600px) {
    padding: 0 10% 32px 10%;
    h2 img {
      transform: translateX(-10%);
    }
  }
  @media only screen and (min-width: 990px) {
    max-width: 700px;
    justify-self: center;
    padding: 0 0 32px 0;
    h2 img {
      width: 100%;
      transform: translateX(0);
      transition: width 0.5s;
    }
  }
`;
const PostSuggestion = styled.div`
  border-top: 1px solid lightgrey;
  padding: 40px 24px;
  text-transform: capitalize;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  p {
    text-transform: none;
    font-family: var(--sans-serif);
    font-weight: lighter;
    font-size: 0.8em;
    padding: 8px;
  }
  @media only screen and (min-width: 600px) {
    width: 80%;
    justify-self: center;
  }
  @media only screen and (min-width: 990px) {
    padding: 40px 56px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 800px;
    justify-self: center;
  }
`;
const PostLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  h3 {
    font-family: var(--serif);
    transition: color 0.5s;
    font-size: 1.5em;
  }
  small {
    padding-top: 8px;
    text-transform: uppercase;
    color: darkgrey;
  }
`;
const Tag = styled.span`
  background-color: var(--coral);
  color: white;
  font-family: var(--sans-serif);
  font-size: 0.8em;
  font-weight: lighter;
  padding: 3px 6px;
  border-radius: 3px;
  margin-right: 6px;
`;

const Claps = styled.div`
  padding-top: 24px;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  position: relative;
  button {
    outline: 0;
    height: 50px;
    width: 50px;
    font-size: 1.5em;
    border: 1px solid lightgrey;
    border-radius: 50%;
    box-shadow: 1px 1px 1px lightgrey;
    background-color: whitesmoke;
    cursor: pointer;
    margin-right: 6px;
  }
  &::before {
    content: '${props => '+' + props.newClaps.toString()}';
    position: absolute;
    opacity: 0;
    top: 8px;
    left: 3px;
    z-index: 1;
    padding: 8px 12px;
    background-color: var(--carbon);
    color: white;
    border-radius: 3px;
    transition: top .5s 1s, opacity .5s 1s; 
  }
  &:active::before {
    opacity: 1;
    top: -16px;
    transition: top 0.2s, opacity .1s;
  }
`;
