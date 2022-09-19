import React from 'react'
import {graphql} from 'gatsby'
import Recipes from '../components/Recipes'
import Layout from '../components/Layout'
const TagTemplate = ({data,pageContext}) => {
  const recipes = data.allContentfulRecipesApp.node

  return (
    <Layout>
      <main className='page'>
      <h2>{pageContext.tag}</h2>
      <div className='tag-recipes'>
        <Recipes recipes={recipes} />
      </div>
       </main>
    </Layout>
  )
}

export const query = graphql`
query GetRecipesByTag($tag: String) {
  allContentfulRecipesApp(
    sort: {fields: title, order: ASC}
    filter: {content: {tags: {eq: $tag}}}
  ) {
    nodes {
      id
      image {
        gatsbyImageData(width: 200, layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      cookTime
      prepTime
      title
    }
  }
}

`
export default TagTemplate