import React from 'react'
import {graphql} from 'gatsby'
import {GatbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../components/Layout'
const RecipeTemplate = (props) => {
  return (
    <div>
        <h2>{props.params.title}</h2>
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