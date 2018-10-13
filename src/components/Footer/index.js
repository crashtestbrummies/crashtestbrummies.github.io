/* global graphql */
import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render () {
    const {facebook, instagram, email} = this.props.data.siteMetadata
    return (
      <React.Fragment>
        <Link to={email}>Email</Link>
        <Link to={facebook}>Facebook</Link>
        <Link to={instagram}>Instagram</Link>
      </React.Fragment>
    )
  }
}
export default Footer

export const FooterFragment = graphql`
  fragment Footer_details on Site {
    siteMetadata {
      facebook
      instagram
      email
    }
  }
`
