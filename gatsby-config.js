require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Web & Mobile Freelancer, Indie Maker & Engineering Student @ ENSTA Paris`,
    description: `Boost your activity with an authentic website.`,
    author: `@achrafash`,
    siteUrl: `https://achrafash.me`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'none'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Achraf Ait Sidi Hammou`,
        short_name: `achrafash`,
        start_url: `/`,
        background_color: `#2f3640`,
        theme_color: `#2f3640`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayout: require.resolve('./src/templates/blogPostTemplate.js')
      }
    },
    `gatsby-remark-images`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node }) => {
                return {
                  ...node.frontmatter,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/blog${node.fields.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog${node.fields.slug}`,
                  category: node.frontmatter.tags,
                  custom_elements: [{ 'content:encoded': node.html }]
                };
              });
            },
            query: `
            {
              allMdx(sort: { fields: [frontmatter___date], order: DESC}) {
                edges {
                  node {
                    excerpt(pruneLength: 250)
                    html
                    frontmatter {
                      title
                      date
                      tags
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
            
            `,
            output: '/rss.xml',
            title: 'Achraf ASH | Engineering Student/Freelance/Maker'
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://achrafash.me`
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https:/achrafash.me',
        sitemap: 'https://achrafash.me/sitemap.xml',
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: 'Googlebot-Image', disallow: ['/'] }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY || 'none',
          databaseURL: process.env.FIREBASE_DATABASE_URL || 'none',
          projectId: process.env.FIREBASE_PROJECT_ID || 'none',
          appId: process.env.FIREBASE_APPID || 'none'
        }
      }
    }
  ]
};
