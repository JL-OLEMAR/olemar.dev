import { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { Posts, PinnedMessage } from '../components'
import { TitleContainer, Title } from '../shared'
import AppContext from '../context/AppContext'

const Blog = () => {
  const {
    state: { pinnedMessages, posts }
  } = useContext(AppContext)

  const { message } = pinnedMessages.find(
    (pinnedMessage) => pinnedMessage.page === 'Blog'
  )

  return (
    <>
      <Helmet>
        <title>Blog - José Olemar</title>
      </Helmet>

      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>Blog</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={message} />

      <Posts posts={posts} />
    </>
  )
}

export default Blog
