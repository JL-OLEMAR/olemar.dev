import { Container } from '../../shared'
import Message from './PinnedMessage.styles'

const PinnedMessage = ({ message, isAbout }) => {
  return (
    <Message>
      <Container>
        <p className={`slideUp ${isAbout ? 'delay-4' : 'delay-2'}`}>
          {message}
        </p>
      </Container>
    </Message>
  )
}

export default PinnedMessage
