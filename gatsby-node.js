const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blogPostTemplate.js`)

  return graphql(`
    {
      allBloggerPost {
        nodes {
          slug
          id
          childMdx {
            timeToRead
            frontmatter {
              title
              date(formatString: "DD MMM YYYY")
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      throw res.errors
    }

    const posts = res.data.allBloggerPost.nodes

    posts.forEach((post, index) => {
      const previous = index === post.length - 1 ? null : posts[index + 1]
      const next = index === 0 ? null : posts[index - 1]
      createPage({
        path: post.slug,
        component: blogPostTemplate,
        context: {
          slug: post.slug,
          previous,
          next,
        },
      })
    })
  })
}

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode, basePath: `blog` })
//     createNodeField({
//       name: `slug`,
//       node,
//       value: `blog/${value}`,
//     })
//   }
// }
