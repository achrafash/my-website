import React from 'react';
import Layout from '../components/Layout';
import seo from '../components/seo';

export default ({ children, pageContext }) => {
  const { title, author, date } = pageContext.frontmatter;
  return (
    <Layout>
      <seo title={title} />
      <article>
        <header>
          <h1>{title}</h1>
          <time>Date: {date}</time>
        </header>
        {children}
      </article>
    </Layout>
  );
};
