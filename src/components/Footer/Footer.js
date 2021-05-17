import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

import Menu from '../Menu/Menu'
import SocialMenu from '../SocialMenu/SocialMenu'
// import heartIcon from '../../images/icons/heartIcon.svg'

import {
  FooterContainer,
  FooterOptions,
  FooterCopyright
} from './Footer.styles'
import { Container } from '../../shared'

const Footer = ({ isPost }) => {
  const {
    state: { icons }
  } = useContext(AppContext)

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
          <span className='slideUp delay-6'>© 2021 José Olemar.</span>
        </FooterCopyright>
      </Container>
    </FooterContainer>
  )
}

export default Footer
