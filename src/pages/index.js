import React from 'react'
import Link from 'gatsby-link'
import TeamList from '../components/TeamList'
import TeamMember from '../components/TeamMemeber'
import EventsList from '../components/EventsList'
import Event from '../components/Event'
import JoinUs from '../components/JoinUs'
import FAQs from '../components/FAQs'
import InstagramList from '../components/InstagramList'
import Instagram from '../components/Instagram'

class IndexPage extends React.Component {
  render () {
    const {allPlayersJson, allFacebookEvent, allInstaNode} = this.props.data
    return (
      <div>
        <p>The West Midlands' first men's Roller Derby team</p>
        <p>A band of Brummie brothers brought together in February 2012. All skatin', no hatin'!</p>
        <TeamList data={allPlayersJson} />
        <EventsList data={allFacebookEvent} />
        <JoinUs />
        <FAQs />
        <InstagramList data={allInstaNode} />
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
  allFacebookEvent(limit: 2) {
    edges {
      node {
        ...Event_details
      }
    }
  }
  allInstaNode {
    edges {
      node {
        ...Instagram_details
      }
    }
  }
}
`
