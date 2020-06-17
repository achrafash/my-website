require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Frontend Freelance, Junior Entrepreneur & Engineering Student`,
    description: `Boost your activity with an authentic website.`,
    author: `@achrafash`,
    siteUrl: `https://achrafash.me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Achraf ASH`,
        short_name: `Achraf ASH`,
        start_url: `/`,
        background_color: `#2f3640`,
        theme_color: `#2f3640`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-blogger`,
      options: {
        apiKey: process.env.BLOGGER_API_KEY || `none`,
        blogId: process.env.BLOGGER_BLOG_ID || `none`,
      },
    },
    `gatsby-plugin-mdx`,
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
            serialize: ({ query: { site, allBloggerPost } }) => {
              return allBloggerPost.edges.map(edge => {
                return Object.assign({}, edge.node.childMdx.frontmatter, {
                  description: edge.node.childMdx.excerpt,
                  date: edge.node.childMdx.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    edge.node.childMdx.frontmatter.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    edge.node.childMdx.frontmatter.slug,
                  custom_elements: [
                    { "content:encoded": edge.node.childMdx.html },
                  ],
                })
              })
            },
            query: `
            {
              allBloggerPost(sort: {order: DESC, fields: [childMdx___frontmatter___date]}) {
                edges {
                  node {
                    childMdx {
                      excerpt
                      html
                      frontmatter {
                        title
                        slug
                        date
                      }
                    }
                  }
                }
              }
            }
            
            `,
            output: "/rss.xml",
            title: "RSS Feed of Achraf's blog",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://achrafash.me`,
      },
    },
  ],
}
