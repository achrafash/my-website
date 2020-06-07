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
              date(formatString: "MMMM DD, YYYY")
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
        path: `blog/${post.slug}`,
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
