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

    results.data.allContentfulRecipes.nodes.forEach(result => {
        result.content.tags.forEach(tag=> {
            createPage({
                path: `/${tag}`,
                component: `src/templates/tag-template.js`,
                context: {
                    tag
                }
            })
        })
    })
}