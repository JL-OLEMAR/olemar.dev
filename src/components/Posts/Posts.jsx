import SinglePost from '../SinglePost/SinglePost'
import { Container, MainSection } from '../../shared'
import PostsContainer from './Posts.styles'

const Posts = ({ posts }) => {
  return (
    <MainSection>
      <Container>
        <PostsContainer className='fadeIn delay-6'>
          {posts &&
            posts.map((post) => <SinglePost post={post} key={post._id} />)}
        </PostsContainer>
      </Container>
    </MainSection>
  )
}

export default Posts
