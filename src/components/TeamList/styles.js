import styled from 'styled-components'
import media from '../_helpers/media'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled.div`
  flex: 0 1 33%;

  ${media.tablet`flex: 0 1 50%;`}
`
