import styled from 'styled-components'
import media from '../_helpers/media'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled.div`
  flex: 1 0 33%;

  ${media.tablet`flex: 1 0 50%;`}
`
