import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Navigation from '../Navigation'
import Img from 'gatsby-image'
import { HeroContainer, HeroTextImage } from './styles.js'

class Header extends React.Component {
  renderHero () {
    const { heroText, hero } = this.props

    if (!hero) return null
    return (
      <HeroContainer>
        <HeroTextImage>
          <Img fluid={heroText.childImageSharp.fluid} />
        </HeroTextImage>
        <Img fluid={hero.childImageSharp.fluid} />
      </HeroContainer>
    )
  }

  render () {
    const { title, canonical, description } = this.props.data.siteMetadata
    const { logo } = this.props
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <link rel='canonical' href={canonical} />
          <meta name='description' content={description} />
          <meta property='og:type' content='website' />
        </Helmet>
        <Navigation logo={logo} title={title} canonical={canonical} />
        {this.renderHero()}
      </div>
    )
  }
}

export default Header

export const HeaderFragment = graphql`
  fragment Header_details on Site {
    siteMetadata {
      title
      canonical
      description
    }
  }

  fragment Header_hero on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment Header_hero_text on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }

`
