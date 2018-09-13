import React from 'react'
import Link from 'gatsby-link'
import TeamList from '../components/TeamList'
import TeamMember from '../components/TeamMemeber'

class IndexPage extends React.Component {
  render () {
    const {allPlayersJson} = this.props.data
    return (
      <div>
        <p>The West Midlands' first men's Roller Derby team</p>
        <p>A band of Brummie brothers brought together in February 2012. All skatin', no hatin'!</p>
        <TeamList data={allPlayersJson} />
      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
query TeamQuery {
  allPlayersJson {
    edges {
      node {
        ...TeamMember_details
      }
    }
  }
}
`
