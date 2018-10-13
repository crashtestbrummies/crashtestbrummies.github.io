import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Grid from 'react-css-grid'

class Footer extends React.Component {
  render () {
    const {facebook, instagram, email} = this.props.data.siteMetadata
    return (
      <section>
        <Grid>
          <Link to={email}>Email</Link>
          <Link to={facebook}>Facebook</Link>
          <Link to={instagram}>Instagram</Link>
        </Grid>
      </section>
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
