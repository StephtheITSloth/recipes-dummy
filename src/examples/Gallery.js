import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
const query = graphql`
query {
  allFile(filter: {extension: {ne: "svg"}}) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          transformOptions: {grayscale: false},
          width: 200,
          height: 200
        )
      }
    }
  }
}
`
const Gallery = () => {
    const data =  useStaticQuery(query).allFile.nodes.map((node,idx) =>{
       return(
        <ul key={idx}>
                        <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.name} className='gallery-img'/>
                    <p>{node.name}</p>

        </ul>
       ) 
    })

  return (
    <div>
        <h2>Simple Gallery</h2>

        <Wrapper>{data}</Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    .gallery-img{
        border-radius: 1rem
    }
`

export default Gallery

