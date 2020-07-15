
const _ = require('lodash')
const path = require('path')

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  //const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark{
        edges {
          node {
            frontmatter {
              slug
              templateKey
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // creating pages only for FELLOWS PORTFOLIO and 
      // will create ESSAYS
    if(node.frontmatter.templateKey == "fellow2Template" )
    {console.log(node.frontmatter.templateKey)
      createPage({
      path: node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  }//if
  })  
}