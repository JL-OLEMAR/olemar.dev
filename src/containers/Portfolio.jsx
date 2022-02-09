import { useContext } from 'react'
import { Helmet } from 'react-helmet'

import { Projects, PinnedMessage } from '../components'
import { TitleContainer, Title } from '../shared'
import AppContext from '../context/AppContext'

const Portfolio = () => {
  const { state: { pinnedMessages, projects } } = useContext(AppContext)
  const { message } = pinnedMessages.find(
    (pinnedMessage) => pinnedMessage.page === 'Portfolio'
  )

  return (
    <>
      <Helmet>
        <title>Portfolio - José Olemar</title>
      </Helmet>

      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>Portfolio</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={message} />

      <Projects projects={projects} />
    </>
  )
}

export default Portfolio
