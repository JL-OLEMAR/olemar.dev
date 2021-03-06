import styled, { css } from 'styled-components'
import setFont from '../mixins/setFont'

export const TitleContainer = styled.section`
  grid-area: 1 / auto / 2 / auto;

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    grid-area: 1 / margin2-start / 2 / margin3-end;
    font-size: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  }

  ${({ aboutTitleContainer }) =>
    aboutTitleContainer &&
    css`
      @media screen and (min-width: 1024px) {
        grid-area: 1 / main-start / 2 / main-end;
        border: none;
      }
    `}
`

export const Title = styled.div`
  margin: 25px 0 40px;
  overflow-y: hidden;

  h1 {
    margin: 0;
    line-height: 1.2em;
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
    transform: translateY(200%);
    ${setFont(({ theme }) => theme.sizes.xl, 500)};
  }

  h3 {
    margin: 0;
    line-height: 1.2em;
    text-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
    transform: translateY(200%);
    ${setFont(({ theme }) => theme.sizes.l, 500)};
  }

  @media screen and (min-width: 1024px) {
    margin: 40px 0;
  }

  ${({ aboutTitle }) =>
    aboutTitle &&
    css`
      @media screen and (min-width: 1024px) {
        padding: 0;
        margin: 40px 0 10px;
      }
    `}
`
