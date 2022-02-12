import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import AppContext from '../context/AppContext'
import { Posts, PinnedMessage } from '../components'
import NotFound from './NotFound/NotFound'
import { TitleContainer, Title } from '../shared'

const TagInfo = () => {
  const { state: { pinnedMessages, posts } } = useContext(AppContext)
  const { slug } = useParams()
  const { message } = pinnedMessages.find(({ page }) => page === 'Blog')

  // Filter a post by 'tag === slug'
  const postsFiltered = posts.filter(({ tags }) => {
    return tags.some(({ name }) => name.toLowerCase() === slug)
  })

  // If no posts are found, return a 404 page
  const { name: tagName } = postsFiltered[0]?.tags
    ? postsFiltered[0].tags.find(({ name }) => name.toLowerCase() === slug)
    : []

  return (
    postsFiltered.length > 0
      ? (
        <>
          <Helmet>
            <title>#{tagName} - José Olemar</title>
          </Helmet>

          <TitleContainer center>
            <Title>
              <h1 className='slideUp'>
                <span>#</span>
                <span>{tagName}</span>
              </h1>
            </Title>
          </TitleContainer>

          <PinnedMessage message={message} />

          <Posts posts={postsFiltered} />
        </>
        )
      : <NotFound />
  )
}

export default TagInfo
