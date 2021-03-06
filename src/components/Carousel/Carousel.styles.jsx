import styled from 'styled-components'
import { Arrow } from '../../shared'

export const CarouselContainer = styled.div`
  height: 100%;

  ${Arrow} {
    width: 15px;

    &:before,
    &:after {
      height: 2px;
      box-shadow: none;
      background: ${({ theme }) => theme.colors.greys[2]};
    }

    @media screen and (min-width: 768px) {
      width: 25px;
    }
  }
`

export const CarouselContent = styled.div`
  height: 100%;

  img {
    display: none;
  }

  img:nth-child(${({ slideIndex }) => slideIndex}) {
    display: block;
  }
`

export const CarouselControl = styled.button`
  display: flex;
  width: 30%;
  height: 100%;
  padding: 0 10px;
  align-items: center;
  position: absolute;
  top: 0;
  opacity: 0.2;
  transition: opacity 300ms ease-out;
  cursor: pointer;

  &.prev {
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.blacks[1]},
      transparent
    );
  }

  &.next {
    justify-content: flex-end;
    right: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.colors.blacks[1]},
      transparent
    );

    ${Arrow} {
      transform: rotateY(180deg);
    }
  }

  &:hover {
    opacity: 1;
  }

  &:hover ${Arrow}::before {
    transform: rotateZ(-60deg);
  }

  &:hover ${Arrow}::after {
    transform: rotateZ(60deg);
  }

  @media screen and (min-width: 850px) {
    padding: 0 20px;
  }
`

export const CarouselDots = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template: 15px / repeat(3, 15px);
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  justify-items: center;

  div {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    outline: 0;
    transition: all 100ms ease-in;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.greys[0]};

    &:hover {
      height: 12px;
      width: 12px;
      background: ${({ theme }) => theme.colors.greys[1]};
    }

    &.active {
      height: 15px;
      width: 15px;
      background: ${({ theme }) => theme.colors.greys[2]};
    }
  }
`
