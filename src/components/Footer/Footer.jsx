import React, { useContext } from 'react'

import { Container } from '../../shared'
import { FooterContainer, FooterCopyright, FooterOptions } from './Footer.styles'
import AppContext from '../../context/AppContext'
import Menu from '../Menu/Menu'
import SocialMenu from '../SocialMenu/SocialMenu'

const Footer = ({ isPost }) => {
  const fecha = new Date()
  const { state: { icons } } = useContext(AppContext)

  const heartIcon = icons.find((icon) => (icon.alt === 'Heart'))

  return (
    <FooterContainer isPost={isPost}>
      <Container>
        <FooterOptions>
          <Menu isFooter />
          <SocialMenu isFooter />
        </FooterOptions>
        <FooterCopyright>
          <span className='slideUp delay-6'>
            Made with <img src={heartIcon.url} alt={heartIcon.alt} />
          </span>
          <span className='slideUp delay-6'>© {fecha.getFullYear()} José Olemar.</span>
        </FooterCopyright>
      </Container>
    </FooterContainer>
  )
}

export default Footer
