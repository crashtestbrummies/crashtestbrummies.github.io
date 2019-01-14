import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { firstHalfOfArray, lastHalfOfArray } from './helpers.js'
import { NAVIGATION_ITEMS } from './constants.js'
import {
  NavBar, LogoNavigation, LogoLink,
  NavLink, MarkersContainer
} from './styles.js'

const Markers = function () {
  return (<MarkersContainer>{'//'}</MarkersContainer>)
}

const Blank = function () {
  return null
}

class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.renderLeftList = this.renderList.bind(this, Markers, Blank)
    this.renderRightList = this.renderList.bind(this, Blank, Markers)
  }

  renderList (LeftMarkers, RightMarkers, item) {
    return (
      <NavLink to={item.link} key={item.link}>
        <RightMarkers />
        {item.name}
        <LeftMarkers />
      </NavLink>
    )
  }

  renderFirstHalfNavigation () {
    return firstHalfOfArray(NAVIGATION_ITEMS).map(this.renderLeftList)
  }

  renderLastHalfNavigation () {
    return lastHalfOfArray(NAVIGATION_ITEMS).map(this.renderRightList)
  }

  render () {
    const { title, canonical, logo } = this.props
    return (
      <NavBar>
        {this.renderFirstHalfNavigation()}
        <LogoNavigation>
          <LogoLink href={canonical}>
            {title}
            <Img fluid={logo.childImageSharp.fluid} />
          </LogoLink>
        </LogoNavigation>
        {this.renderLastHalfNavigation()}
      </NavBar>
    )
  }
}

export default Navigation

export const NavigationFragment = graphql`
  fragment Navigation_details on Site {
    siteMetadata {
      title
      canonical
      description
    }
  }

  fragment Navigation_logo on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }

`
