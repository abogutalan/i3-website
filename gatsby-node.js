
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
            id
            frontmatter {
              slug
              templateKey
              name
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
    if(node.frontmatter.templateKey == "fellowTemplate" ) {
      /** id provides matching fellows and fellow portfolios  */
      const id = node.id
      /** removing white spaces */
      const editted_name = node.frontmatter.name.replace(/ +/g, "").toLowerCase()
      let portfolio_path = node.frontmatter.slug + editted_name
      /** 
       * if new template added path can be a updated in if cases
       */
      createPage({
      path: portfolio_path, // to have one mark down for every fellowss
      component: path.resolve(
        `src/templates/${String(node.frontmatter.templateKey)}.js`
      ),
      context: {
        // additional data can be passed via context
        id,
      },
    })
  }//if
  })  
}