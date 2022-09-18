import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link, graphql} from 'gatsby'
import Recipes from '../components/Recipes'
const About = ({data}) => {
  const recipes = data.allContentfulRecipesApp.nodes
  const featuredRecipes = [...recipes.slice(1)]
  return (
    <Layout>
      <main className='page'>
        <section className='about-page'>
          <article>
            <h2>I'm baby pop-up air plant.</h2>
            <p>Pitchfork yes plz wolf roof party hot chicken. Woke lumbersexual big mood paleo iPhone plaid asymmetrical meggings scenester vinyl tacos bespoke.</p>
            <p>Health goth succulents blue bottle tonx, hoodie asymmetrical DSA prism normcore semiotics street art unicorn flannel raclette. You probably haven't heard of them Brooklyn master</p>
            <Link to='/contact' className='btn'>
              Contact
            </Link>
          </article>
          <StaticImage 
          src='../assets/images/Hero1.jpg' 
          placeholder='tracedSVG' 
          layout='constrained' 
          className='about-img' 
          alt='food'/>
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

export default About