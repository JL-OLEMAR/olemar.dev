import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tag = styled(Link)`
  display: inline-flex;
  padding: 0 5px;
  margin-right: 5px;
  position: relative;
  z-index: 10;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};

  span:last-child {
    font-weight: 500;
  }
`

export default Tag
