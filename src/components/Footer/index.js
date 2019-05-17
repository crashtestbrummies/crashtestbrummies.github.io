import React from 'react'
import { graphql } from 'gatsby'
import { Wrapper, FooterLink, CreditLink, SponsorList, Sponsor } from './styles.js'
import Sponsors from './sponsors.js'

class Footer extends React.Component {
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
    const { facebook, instagram } = this.props.data.siteMetadata
    return (
      <Wrapper>
        <Sponsors />
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
`
