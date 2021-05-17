import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import AppContext from '../../context/AppContext'

import {
  Hero,
  HeroTitle,
  HeroDescription,
  HeroLink,
  StyledFooter
} from './Home.styles'
import { MainSection, Container } from '../../shared'

const Home = () => {
  const {
    state: {
      author: { image },
      icons
    }
  } = useContext(AppContext)

  const PurpleArrow = icons.find((icon) => icon.alt === 'Purple Arrow')

  return (
    <>
      <Helmet>
        <title>José Olemar</title>
      </Helmet>

      <MainSection isHome>
        <Container>
          <Hero>
            <img src={image.url} alt={image.alt} className='fadeIn' />
            <HeroTitle className='overflow--hidden'>
              <h1 className='slideUp'>Hi, I&apos;m José Olemar</h1>
            </HeroTitle>
            <HeroDescription className='overflow--hidden'>
              <p className='slideUp delay-2'>
                I like creating things with web technologies.
              </p>
            </HeroDescription>
            <div className='overflow--hidden'>
              <HeroLink className='slideUp delay-4' to='/portfolio'>
                See the latest projects I&apos;ve been working on{' '}
                <img src={PurpleArrow.url} alt={PurpleArrow.alt} />
              </HeroLink>
            </div>
          </Hero>
        </Container>
      </MainSection>

      <StyledFooter>
        <Container>
          <div className='overflow--hidden'>
            <p className='slideUp delay-6'>
              You can follow me on{' '}
              <a
                href='https://twitter.com/Joseluisolemar'
                target='_blank'
                rel='noreferrer'
                className='link--decoration'
              >
                Twitter
              </a>{' '}
              and{' '}
              <a
                href='https://github.com/JL-OLEMAR'
                target='_blank'
                rel='noreferrer'
                className='link--decoration'
              >
                GitHub
              </a>
              . Also, here&apos;s my{' '}
              <a
                href='https://www.linkedin.com/in/jose-luis-olemar-velasquez'
                target='_blank'
                rel='noreferrer'
                className='link--decoration'
              >
                LinkedIn
              </a>{' '}
              and my{' '}
              <a
                href='mailto:joseluis19963@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='link--decoration'
              >
                Email
              </a>
              .
            </p>
          </div>
        </Container>
      </StyledFooter>
    </>
  )
}

export default Home
