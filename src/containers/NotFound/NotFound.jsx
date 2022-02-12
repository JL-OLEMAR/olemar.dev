import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import AppContext from '../../context/AppContext'
import { MainSection } from '../../shared'
import { ErrorContainer, ErrorMessage } from './NotFound.styles'

const NotFound = () => {
  const { state: { icons } } = useContext(AppContext)
  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow')

  return (
    <>
      <Helmet>
        <title>Page Not Found - José Olemar</title>
      </Helmet>

      <MainSection>
        <ErrorContainer>
          <ErrorMessage className='fadeIn delay-2'>
            <h1>404</h1>
            <h2>There&apos;s nothing here...</h2>
            <p>
              ...the page you&apos;re looking for was not found or maybe never
              existed.
            </p>
            <Link to='/'>
              Back to Home <img src={arrowIcon.url} alt={arrowIcon.alt} />
            </Link>
          </ErrorMessage>
        </ErrorContainer>
      </MainSection>
    </>
  )
}

export default NotFound
