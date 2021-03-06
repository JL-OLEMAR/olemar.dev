import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import setFont from '../../shared/mixins/setFont'

export const HeaderBackground = styled.div`
  height: 70px;
  position: fixed;
  top: 0;
  transform: translateY(-70px);
  transition: all 300ms ease-out;
  width: 100%;
  z-index: 10;

  ${({ isBlack }) =>
    isBlack &&
    css`
      background: ${({ theme }) => theme.colors.black};
    `}

  @media screen and (min-width: 1024px) {
    display: none;
`

export const LogoContainer = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    height: 70px;
    padding-left: 20px;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;
    transition: all 300ms ease-out;
    transform: translateY(-70px);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    grid-area: 1 / margin1-start / 2 / margin2-end;
  }
`

export const LogoText = styled(Link)`
  ${({ theme }) => setFont(theme.sizes.m, 600, theme.colors.white)}

  @media screen and (min-width: 1024px) {
    position: fixed;
    top: 55px;
    z-index: 10;
  }
`

export const Navbar = styled.div`
  @media screen and (min-width: 1024px) {
    grid-area: 1 / margin3-start / 2 / margin4-end;
  }
`

export const NavbarButton = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    height: 70px;
    padding-right: 20px;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    transition: all 300ms ease-out;
    transform: translateY(-70px);
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
  }
`

export const BurgerButton = styled.div`
  width: 50px;
  height: 50px;
  margin-left: auto;
  position: relative;
  z-index: 30;
  outline: none;
  cursor: pointer;

  i {
    display: inline-block;
    width: 100%;
    height: 3px;
    position: absolute;
    transition: all 400ms ease-out;
    background: ${({ theme }) => theme.colors.white};

    &:first-child {
      top: 15px;
    }

    &:nth-child(2) {
      width: 37.5px;
      top: 23.5px;
      left: 6.25px;
    }

    &:last-child {
      width: 25px;
      bottom: 15px;
      left: 12.5px;
    }
  }

  &.active {
    i {
      background: ${({ theme }) => theme.colors.primary};

      &:first-child {
        top: 25px;
        transform: rotateZ(-45deg);
      }

      &:nth-child(2) {
        opacity: 0;
        transform: translateX(100px);
      }

      &:last-child {
        width: 100%;
        bottom: 22px;
        left: 0;
        transform: rotateZ(45deg);
        box-shadow: 0 0 2px ${({ theme }) => theme.colors.black};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 60px;
    height: 60px;
    position: fixed;
    top: 40px;

    i {
      width: 100%;

      &:first-child {
        top: 20px;
      }

      &:nth-child(2) {
        width: 45px;
        top: 28.5px;
        left: 7.5px;
      }

      &:last-child {
        width: 30px;
        bottom: 20px;
        left: 15px;
      }
    }

    &.active {
      i {
        &:first-child {
          top: 30px;
        }

        &:last-child {
          width: 100%;
          bottom: 27px;
          left: 0;
        }
      }
    }
  }
`

export const NavbarMenu = styled.nav`
  display: ${({ menu }) => (menu ? 'flex' : 'none')};
  user-select: none;

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    grid-area: auto / margin1-start / auto / margin4-end;
  }
`

export const MenuContainer = styled.div`
  padding-right: 30px;
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  z-index: 30;
  text-align: right;
  overflow-y: auto;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    transform: translateY(200%);
  }

  @media screen and (min-width: 1024px) {
    padding-right: 80px;
    top: 120px;
    right: unset;
  }
`
