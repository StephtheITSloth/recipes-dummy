import React from 'react'
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'


const Testing = ({data}) => {
  return (
    <Layout>
    <main className='page'>
        <Gallery />
    </main>
        <h2>{}</h2>
    </Layout>
  )
}

export default Testing

