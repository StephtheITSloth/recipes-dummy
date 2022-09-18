import React from 'react'
import {graphql} from 'gatsby'
const RecipeTemplate = (props) => {
    console.log(props.data)
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