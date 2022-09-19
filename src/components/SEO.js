import React from 'react'
import { useSiteMetaData} from '../hooks/use-site-metadata'
const SEO = ({title,description,pathname, children}) => {
    const {title: defaultTitle, description: defaultDescription, author} = useSiteMetaData()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        author: author
    }
  return (
    <>
    <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {children}
    </>
  )
}

export default SEO
