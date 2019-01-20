import React from 'react'
import { graphql } from 'gatsby'
import TeamList from '../components/TeamList'
// import EventsList from '../components/EventsList'
import JoinUs from '../components/JoinUs'
import FAQs from '../components/FAQs'
// import InstagramList from '../components/InstagramList'
import GamesList from '../components/GamesList'
import Layout from '../components/layout'
import Section from '../components/Section'

class IndexPage extends React.Component {
  render () {
    const {
      allPlayersJson,
      // allFacebookEvent, allInstaNode,
      site, allGamesNode, logo, heroText, hero, sponsors
    } = this.props.data
    return (
      <Layout site={site} logo={logo.edges[0].node} heroText={heroText.edges[0].node} hero={hero.edges[0].node} sponsors={sponsors.edges}>
        <Section theme='tear'>
          <h2>Who are we?</h2>
          <p>The West Midlands' first men's Roller Derby team. Established in 2012, became members of the MRDA in 2015, and achieved world ranking status in 2018. We have members from all over Brum and beyond! All skatin', no hatin'!</p>
          <p>We have an open door policy for all existing derby skaters and we are always on the look out for new skaters to join our ranks.</p>
        </Section>
        <Section>
          <TeamList data={allPlayersJson} />
        </Section>
        <Section theme='tear'>
          <JoinUs />
        </Section>
        <Section>
          <FAQs />
        </Section>
        <Section theme='tear'>
          <GamesList data={allGamesNode} />
        </Section>
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
  # allFacebookEvent(limit: 2) {
  #   edges {
  #     node {
  #       ...Event_details
  #     }
  #   }
  # }
  allInstaNode {
    edges {
      node {
        ...Instagram_details
      }
    }
  }
  allGamesNode(limit: 5, sort: {fields: [date], order: DESC}) {
    edges {
      node {
        ...Game_details
      }
    }
  }
  site {
    ...Navigation_details
    ...Header_details
    ...Footer_details
  }
  logo: allFile(filter: {relativePath: {eq: "images/crash_test_brummies-logo.png"}}) {
    edges {
      node {
        ...Navigation_logo
      }
    }
  }
  hero: allFile(filter: {relativePath: {eq: "images/hero_image.png"}}) {
    edges {
      node {
        ...Header_hero
      }
    }
  }
  heroText: allFile(filter: {relativePath: {eq: "images/smash_type.png"}}) {
    edges {
      node {
        ...Header_hero_text
      }
    }
  },
  sponsors: allSponsorsJson {
    edges {
      node {
        ...Footer_sponsor
      }
    }
  }
}
`
