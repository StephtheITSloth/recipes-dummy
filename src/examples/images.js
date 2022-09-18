import React from 'react'
import { Layout } from 'gatsby-plugin-image'
import {StaticImage} from 'gatsby-plugin-image'
import styled from 'styled-components'


const images = () => {
  return (
    <Wrapper>

    <article>
        <h1>constrained</h1>
        <StaticImage src='../assets/images/recipe-1.jpeg' alt='food' layout='constrained' height={400} placeholder='tracedSVG'/>
    </article>
    <article>
        <h1>fixes</h1>
        <StaticImage  alt='food' layout='fixed' src='../assets/images/recipe-1.jpeg' />
    </article>
    <article>
        <h1>full</h1>
        <StaticImage layout='fullWidth' src='../assets/images/recipe-1.jpeg' alt='food'/>
    </article>
    </Wrapper>
  )
}


const Wrapper = styled.section`
    width: 70vw;
    margin: 0 auto;
    display: grid;
    text-align: center;
    gap: 2rem;

    .example-img{
        height: 300px
    }

    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr;

        .example-img {
            height: 200px;
        }
    }
`

export default images