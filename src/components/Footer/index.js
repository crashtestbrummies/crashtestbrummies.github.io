import React from 'react'
import { graphql } from 'gatsby'
import { Wrapper, FooterLink, CreditLink, SponsorList, Sponsor } from './styles.js'
import Img from 'gatsby-image'

class Footer extends React.Component {
  constructor (props) {
    super(props)
    this.renderSponsor = this.renderSponsor.bind(this)
  }

  renderSponsor (sponsor, i) {
    const { image, url, name } = sponsor.node
    return (
      <Sponsor key={`sponsor_${i}`}>
        <a href={url} target={`_blank`} rel={`nofollow`} title={name}>
          <Img fluid={image.childImageSharp.fluid} alt={name} />
        </a>
      </Sponsor>
    )
  }

  renderSponsors () {
    const { sponsors } = this.props.data
    console.log(sponsors)

    return (
      <SponsorList>
        {sponsors.map(this.renderSponsor)}
      </SponsorList>
    )
  }

  renderHeroCredit () {
    return (
      <React.Fragment>
        Hero image by <CreditLink href={'https://www.facebook.com/K.Jaros.Roller.Derby.Photo/'}>Krzysztof Jaros Roller Derby Photography</CreditLink>
        {` // `}
      </React.Fragment>
    )
  }

  renderHeadshotCredit () {
    return (
      <React.Fragment>
        Headshots by <CreditLink href={'https://www.facebook.com/floydkingderbyphotography/'}>Floyd King Derby Photography</CreditLink>
      </React.Fragment>
    )
  }

  render () {
    console.log(this.props)
    const { facebook, instagram } = this.props.data.siteMetadata
    return (
      <Wrapper>
        {this.renderSponsors()}
        <p>
          <FooterLink href={facebook}>Facebook</FooterLink>{' // '}
          <FooterLink href={instagram}>Instagram</FooterLink>
        </p>
        <p>
          {`© Copyright 2019 Crash Test Brummies // `}
          {this.renderHeroCredit()}
          {this.renderHeadshotCredit()}
        </p>
      </Wrapper>
    )
  }
}
export default Footer

export const FooterFragment = graphql`
  fragment Footer_details on Site {
    siteMetadata {
      title
      facebook
      instagram
      email
    }
  }

  fragment Footer_sponsor on SponsorsJson {
    name
    url
    image {
      childImageSharp {
        fluid(maxWidth: 285) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
