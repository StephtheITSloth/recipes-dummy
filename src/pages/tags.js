import React from 'react'
import Layout from '../components/Layout'
import {Link, graphql} from 'gatsby'
import setUpTags from '../utils/setUpTags'

const Tags = ({data}) => {

  const tags = data.allContentfulRecipesApp.nodes
  const newTags = setUpTags(tags)
  console.log(newTags)
  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {newTags.map((tag,idx) => {
            const [text, value] = tag
            return <Link to={`/${text}`} key={idx} className='tag'>
            <h5>{text}</h5> <p>{value}</p>
            </Link>
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipesApp {
      nodes {
        content {
          tags
        }
      }
    }
  }
`


export default Tags