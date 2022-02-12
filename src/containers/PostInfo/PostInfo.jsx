import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import PortableText from '@sanity/block-content-to-react'

import AppContext from '../../context/AppContext'
import useSerializers from '../../hooks/useSerializers'
import { PinnedMessage } from '../../components'
import NotFound from '../NotFound/NotFound'
import { PostHeader, PostImage, PostMeta } from './PostInfo.styles'
import {
  Container,
  TitleContainer,
  Title,
  ArticleContainer,
  Article,
  MainSection,
  Tag
} from '../../shared'

const ProjectInfo = () => {
  const { state: { posts } } = useContext(AppContext)
  const { slug } = useParams()
  const serializers = useSerializers()
  const singlePost = posts.find((post) => post.slug === slug)

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC'
  }

  return singlePost
    ? (
      <>
        <Helmet>
          <title>{singlePost.title} - José Olemar</title>
        </Helmet>

        <PostHeader>
          <PostImage coverImage={singlePost.cover} className='fadeIn' />
          <Container>
            <TitleContainer aboutTitleContainer>
              <Title aboutTitle>
                <h1 className='slideUp'>{singlePost.title}</h1>
              </Title>
              <PinnedMessage message={singlePost.description} />
              <PostMeta>
                <span className='slideUp delay-4'>
                  {new Date(singlePost.publishedAt).toLocaleDateString(
                    'en-US',
                    dateOptions
                  )}
                </span>
                <div>
                  {singlePost.tags.map((tag) => (
                    <Tag
                      to={`/blog/tag/${tag.name.toLowerCase()}`}
                      key={tag._id}
                      className='slideUp delay-4'
                    >
                      <span>#</span>
                      <span>{tag.name}</span>
                    </Tag>
                  ))}
                </div>
              </PostMeta>
            </TitleContainer>
          </Container>
        </PostHeader>

        <MainSection>
          <Container>
            <ArticleContainer className='fadeIn delay-6'>
              <Article>
                <PortableText
                  blocks={singlePost.body}
                  serializers={serializers}
                />
              </Article>
            </ArticleContainer>
          </Container>
        </MainSection>

      </>
      )
    : (
      <NotFound />
      )
}

export default ProjectInfo
