import React from 'react'
import Layout from '../components/Layout'
import AllRecipes from '../components/Allrecipes'
const Recipes = () => {
  return (
    <Layout>

    <main className='page'>
      <AllRecipes />
    </main>
    </Layout>
  )
}

export default Recipes