import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import { Wrapper, FooterLink } from './styles.js'

class Footer extends React.Component {
  render () {
    const { facebook, instagram, email } = this.props.data.siteMetadata
    return (
      <Wrapper>
        <p>{'© Copyright 2019 Crash Test Brummies // Hero image by X // Headshots by Floyd King Derby Photography'}</p>
        <p>
          <FooterLink href={`mailto://${email}`}>Email</FooterLink>{' // '}
          <FooterLink href={facebook}>Facebook</FooterLink>{' // '}
          <FooterLink href={instagram}>Instagram</FooterLink>
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
