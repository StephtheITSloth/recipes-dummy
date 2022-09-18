import React from 'react'
import TagsList from './TagsList'
import RecipesList from './Recipes'
import {graphql, useStaticQuery} from 'gatsby'

const getData =  graphql`
query {
  allContentfulRecipesApp(sort: {fields: title, order: ASC}) {
    nodes {
      title
      prepTime
      cookTime
      id
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      content {
        tags
      }
    }
  }
}
`

const Allrecipes = () => {
    const data = useStaticQuery(getData).allContentfulRecipesApp.nodes
    console.log(data)
  return (
    <section className='recipes-container'rec>
        <h4>All Recipes</h4>
        <TagsList tags={data}/>
        <RecipesList recipes={data}/>
    </section>
  )
}

export default Allrecipes