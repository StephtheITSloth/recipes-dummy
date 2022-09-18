import React from 'react'
import setUpTags from '../utils/setUpTags'
import {Link} from 'gatsby'
const TagsList = ({tags}) => {
  const newTags = setUpTags(tags)
  return (
    <section className='tag-container'>
      <h4>Recipes</h4>
      <div className='tags-list'>
        {newTags.map((tag,idx) => {
          const [text, value] = tag
          return <Link to={`/${text}`} key={idx}>{text} ({value}) </Link>
        })}
      </div>
    </section>
  )
}

export default TagsList