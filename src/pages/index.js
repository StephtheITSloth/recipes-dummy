import React from "react"
import Layout from "../components/Layout"
import {StaticImage} from 'gatsby-plugin-image'
import AllRecipes from "../components/Allrecipes"
import SEO from '../components/SEO'
export default function Home() {
  return (
  <Layout>
    <main className='page'>
      <header className='hero'>
        <StaticImage src='../assets/images/recipes.jpg' alt='cutting board' className='hero-img' layout='fullWidth' placeholder='tracedSVG'/>
        <div className='hero-container'>
          <div className='hero-text'>
            <h1>Recipes Dummy</h1>
            <h4>Recipes for dummies!</h4>
          </div>
        </div>
      </header>
      <AllRecipes />
    </main>
  </Layout>
  )
}

export const Head = () => {
  <SEO />
}
