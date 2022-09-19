import { useStaticQuery, graphql } from 'gatsby'

const data  = graphql`
query {
  site(siteMetadata: {}) {
    siteMetadata {
      author
      description
      title
    }
  }
}
`

const useSiteMetaData = () => {
    const metaData = useStaticQuery(data)
  return metaData.site.siteMetaData
}



export default useSiteMetaData