import styled from 'styled-components'
import media from '../_helpers/media'

export const Wrapper = styled.div`
  position: relative;
  margin: 5px;
`

export const Text = styled.p`
  position: absolute;
  bottom: -1em;
  left: 0;
  width: 100%;
  padding: 0.5em 0;

  background-color: rgba(245, 190, 11, 0.7);
  color: #010101;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.phone`font-size: 0.7em;`}
`
