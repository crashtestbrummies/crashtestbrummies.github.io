import styled from 'styled-components'
import media from '../_helpers/media'

export const List = styled.dl`
  transform: rotate(-2deg);

  ${media.tablet`transform: none;`}
`

export const Title = styled.dt`
  margin-bottom: 0.25em;
`

export const Description = styled.dd`
  margin-bottom: 2em;
  font-weight: 400;
`
