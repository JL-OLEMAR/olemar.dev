import { useContext, useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import AppContext from '../../context/AppContext'
import MenuContext from '../../context/MenuContext'
import useScroll from '../../hooks/useScroll'
import Menu from '../Menu/Menu'
import SocialMenu from '../SocialMenu/SocialMenu'
import { Arrow } from '../../shared'
import { MenuItem } from '../Menu/Menu.styles'
import {
  BurgerButton,
  HeaderBackground,
  LogoContainer,
  LogoText,
  MenuContainer,
  Navbar,
  NavbarButton,
  NavbarMenu
} from './Header.styles'

const Header = ({ hasArrow }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { header, background } = useScroll()
  const { menu, setMenu } = useContext(MenuContext)
  const { state } = useContext(AppContext)
  const { author: { cv }, icons } = state

  const [arrowState, setArrowState] = useState(false)
  const arrowRef = useRef(arrowState)
  arrowRef.current = arrowState

  const [goState, setGoState] = useState(false)
  const goRef = useRef(goState)
  goRef.current = goState

  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow')

  const handleClick = () => {
    setMenu(!menu)
    document.getElementById('root').classList.toggle('overflow--hidden')
  }

  const handleGoBack = () => {
    setArrowState(!arrowState)

    setTimeout(() => {
      if (arrowRef.current) {
        setGoState(!goRef.current)
      }
    }, 300)

    setTimeout(() => {
      const isPortfolio = pathname.includes('/portfolio')
      isPortfolio ? navigate('/portfolio') : navigate('/blog')
    }, 600)

    setTimeout(() => {
      setArrowState(!arrowRef.current)
      setGoState(!goRef.current)
    }, 700)
  }

  return (
    <>
      <HeaderBackground
        className={header ? 'header--visible' : ''}
        isBlack={background}
      />
      <LogoContainer className={header ? 'header--visible' : ''}>
        {hasArrow
          ? (
            <Arrow
              onClick={handleGoBack}
              onKeyPress={handleGoBack}
              role='button'
              tabIndex='0'
              aria-label='Go Back'
              className={`fadeIn ${arrowState ? 'active' : ''} ${
                  goState ? 'go-back' : ''
                }`}
            />
            )
          : (
            <LogoText to='/' className='fadeIn'>
              {'<José Olemar />'}
            </LogoText>
            )}
      </LogoContainer>
      <Navbar>
        <NavbarButton className={header ? 'header--visible' : ''}>
          <BurgerButton
            onClick={handleClick}
            onKeyPress={handleClick}
            role='button'
            tabIndex='0'
            aria-label='Toggle Menu'
            className={`fadeIn ${menu ? 'active' : ''}`}
          >
            <i />
            <i />
            <i />
          </BurgerButton>
        </NavbarButton>
      </Navbar>
      <NavbarMenu menu={menu}>
        <MenuContainer>
          <Menu handleClick={handleClick}>
            <MenuItem>
              <a href={`${cv}?dl`} className='slideUp duration-3 delay-4'>
                Download CV <img src={arrowIcon.url} alt={arrowIcon.alt} />
              </a>
            </MenuItem>
          </Menu>
          <SocialMenu />
        </MenuContainer>
      </NavbarMenu>
    </>
  )
}

export default Header
