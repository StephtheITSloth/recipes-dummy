import React from 'react'
import Layout from '../components/Layout'
import {Link, graphql} from 'gatsby'
import Recipes from '../components/Recipes'
const contact = ({data}) => {

  const recipes = data.allContentfulRecipesApp.nodes
  const featuredRecipes = [...recipes.slice(1)]
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
          <h3>Want To Get In Touch</h3>
            <p>I'm baby offal mixtape quinoa bespoke mlkshk, freegan cronut cliche pitchfork you probably haven't heard of them seitan green juice polaroid mumblecore.</p>
            <p> Hammock big mood brunch pabst, la croix crucifix 90's gastropub pickled raw denim next level try-hard.</p>
            <p> Narwhal four dollar toast poutine disrupt listicle. Tattooed DSA fashion axe squid schlitz fingerstache ramps vegan crucifix. </p>
          </article>
          <form clasName='form contact-form'>
            <div className='form-row'>
              <label htmlFor='name'>your name</label>
              <input id='name' type='text' placeholder='name' onChange={(e) => e.target.value}/>
            </div>
            <div className='form-row'>
              <label htmlFor='email'>your email</label>
              <input id='email' type='email' placeholder='email' onChange={(e) => e.target.value}/>
            </div>
            <div className='form-row'>
              <label htmlFor='message'>message</label>
              <textarea id='message' onChange={(e) => e.target.value}></textarea>
            </div>
            <button type='submit' className='btn block'>submit</button>
          </form>
        </section>
        <section className='featured-recipes'>
          <h5>Featured Recipes</h5>
          <Recipes recipes={featuredRecipes}/>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipesApp(sort: {fields: title, order: ASC}) {
      nodes {
        title
        prepTime
        cookTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          description
        }
      }
      totalCount
    }
  }
`

export default contact