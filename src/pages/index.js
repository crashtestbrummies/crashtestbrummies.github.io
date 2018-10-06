import React from 'react'
import Link from 'gatsby-link'
import TeamList from '../components/TeamList'
import TeamMember from '../components/TeamMemeber'
import EventsList from '../components/EventsList'
import Event from '../components/Event'

class IndexPage extends React.Component {
  render () {
    const {allPlayersJson, allFacebookEvent} = this.props.data
    return (
      <div>
        <p>The West Midlands' first men's Roller Derby team</p>
        <p>A band of Brummie brothers brought together in February 2012. All skatin', no hatin'!</p>
        <TeamList data={allPlayersJson} />
        <EventsList data={allFacebookEvent} />
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
  allFacebookEvent {
    edges {
      node {
        ...Event_details
      }
    }
  }
}
`
