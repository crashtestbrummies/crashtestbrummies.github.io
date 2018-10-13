import React from 'react'
import { graphql } from 'gatsby'
import TeamList from '../components/TeamList'
import EventsList from '../components/EventsList'
import JoinUs from '../components/JoinUs'
import FAQs from '../components/FAQs'
import InstagramList from '../components/InstagramList'
import Layout from '../components/layout'

class IndexPage extends React.Component {
  render () {
    const {allPlayersJson, allFacebookEvent, allInstaNode, site} = this.props.data
    return (
      <Layout site={site}>
        <p>The West Midlands' first men's Roller Derby team</p>
        <p>A band of Brummie brothers brought together in February 2012. All skatin', no hatin'!</p>
        <TeamList data={allPlayersJson} />
        <EventsList data={allFacebookEvent} />
        <JoinUs />
        <FAQs />
        <InstagramList data={allInstaNode} />
      </Layout>
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
  site {
    ...Footer_details
  }
}
`
