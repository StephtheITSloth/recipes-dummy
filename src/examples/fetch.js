import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const getData = graphql`
query{
  site {
    info:siteMetadata {
      author
      description
      person {
        age
        name
      }
      title
      simpleData
      complexData {
        age
      }
      description
    }
  }
}
`

const FetchData = () => {
  const data = useStaticQuery(getData).site.info
  return (
    <div>
      <h2>{data.person.name}</h2>
    </div>
  )
}

export default FetchData