const path = require('path')

exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions

    const results = await graphql(`
    query GetRecipes {
        allContentfulRecipesApp {
          nodes {
            content {
              tags
            }
            title
          }
        }
      }
    `)

    results.data.allContentfulRecipesApp.nodes.forEach(result => {
        result.content.tags.forEach(tag=> {
            createPage({
                path: `/${tag}`,
                component: path.resolve(`./src/templates/tag-template.js`),
                context: {
                    tag
                }
            })
        })
    })
}