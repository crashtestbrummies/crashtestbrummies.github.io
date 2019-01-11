import styled from 'styled-components'
import media from '../_helpers/media'

export const GameTable = styled.table`
  width: 100%;
  margin: 20px auto;
  table-layout: auto;
  border-spacing: 10px;
  border-collapse: separate;

  ${media.tablet`
    font-size: 0.5em;
    border-spacing: 5px;
  `}
`
