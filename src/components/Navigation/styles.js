import { Link } from 'gatsby'
import styled from 'styled-components'
import media from '../_helpers/media'

export const NavBar = styled.div`
  border-top: 100px solid #010101;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  position: relative;
  z-index: 2;

  ${media.tablet`border-top-width: 10px;`}
  ${media.phone`border-top-width: 4px;`}
`

export const LogoNavigation = styled.h1`
  width: 300px;

  ${media.tablet`width: 200px;`}

`

export const LogoLink = styled.a`
  text-indent: -9999px;
  line-height: 0;
  display: block;
`

export const NavLink = styled(Link)`
  font-size: 1em;
  font-weight: bold;
  color: #010101;
  text-decoration: none;
  text-transform: uppercase;

  ${media.phone`display: none;`}
  ${media.tablet`font-size: 0.75em;`}
`

export const MarkersContainer = styled.span`
  margin: 0 25px;
  color: #f7bf2d;

  ${media.tablet`margin: 0;`}

`
