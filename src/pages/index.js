import React from "react"
import Layout from "../components/Layout"
import {StaticImage} from 'gatsby-plugin-image'
import AllRecipes from "../components/Allrecipes"
export default function Home() {
  return (
  <Layout>
    <main className='page'>
      <header className='hero'>
        <StaticImage src='../assets/images/recipes.jpg' alt='cutting board' className='hero-img' layout='fullWidth' placeholder='tracedSVG'/>
        <div className='hero-container'>
          <div className='hero-text'>
            <h1>Recipes Dummy</h1>
            <h4>Rcipes for dummies!</h4>
          </div>
        </div>
      </header>
      <AllRecipes />
    </main>
  </Layout>
  )
}
