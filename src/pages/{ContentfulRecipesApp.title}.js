import React from 'react'
import {graphql} from 'gatsby'
import {GatbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../components/Layout'
const RecipeTemplate = () => {
  return (
    <div>
        <h2></h2>
    </div>
  )
}

export const query = graphql`
query getSingleRecipe($title:String) {
  contentfulRecipesApp(title: {eq: $title}) {
    id
  }
}

`

export default RecipeTemplate