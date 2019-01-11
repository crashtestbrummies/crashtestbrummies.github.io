import styled from 'styled-components'
import media from '../_helpers/media'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled.div`
  flex: 1 0 25%;
  margin-bottom: 0.5em;

  ${media.tablet`flex: 1 0 50%;`}
`
