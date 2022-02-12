import { useContext } from 'react'
import { Link } from 'react-router-dom'

import AppContext from '../../context/AppContext'
import { MenuContainer, MenuItem } from './Menu.styles'

const Menu = ({ children, handleClick, isFooter }) => {
  const { state: { icons } } = useContext(AppContext)
  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow')

  return (
    <MenuContainer>
      <MenuItem>
        <Link
          to='/portfolio'
          onClick={handleClick}
          className={`slideUp ${isFooter ? 'delay-6' : 'duration-3'}`}
        >
          Portfolio <img src={arrowIcon.url} alt={arrowIcon.alt} />
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to='/blog'
          onClick={handleClick}
          className={`slideUp ${isFooter ? 'delay-6' : 'duration-3 delay-1'}`}
        >
          Blog <img src={arrowIcon.url} alt={arrowIcon.alt} />
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to='/about'
          onClick={handleClick}
          className={`slideUp ${isFooter ? 'delay-6' : 'duration-3 delay-2'}`}
        >
          About me <img src={arrowIcon.url} alt={arrowIcon.alt} />
        </Link>
      </MenuItem>
      <MenuItem>
        <a
          href='mailto:joseluis19963@gmail.com'
          target='_blank'
          rel='noreferrer'
          className={`slideUp ${isFooter ? 'delay-6' : 'duration-3 delay-3'}`}
        >
          Contact <img src={arrowIcon.url} alt={arrowIcon.alt} />
        </a>
      </MenuItem>
      {children}
    </MenuContainer>
  )
}

export default Menu
