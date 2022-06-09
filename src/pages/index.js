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
      aTeam, faqs,
      site, allGamesNode, logo, heroText, hero
    } = this.props.data
    return (
      <Layout site={site} logo={logo.edges[0].node} heroText={heroText.edges[0].node} hero={hero.edges[0].node} >
        <Section theme='tear'>
          <h2>Who are we?</h2>
          <p>The West Midlands' first men's Roller Derby team. Established in 2012, became members of the MRDA in 2015, and achieved world ranking status in 2018. We have members from all over Brum and beyond! All skatin', no hatin'!</p>
          <p>We have an open door policy for all existing derby skaters and we are always on the look out for new skaters to join our ranks.</p>
        </Section>
        <Section>
          <TeamList data={aTeam} />
        </Section>
        <Section theme='tear'>
          <JoinUs />
        </Section>
        <Section>
          <FAQs data={faqs} />
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
  aTeam: allPrismicRoster(filter: {data: {roster_name: {text: {eq: "A Team"}}}}) {
    edges {
      node {
        id
        data {
          body {
            ...TeamMember_details
          }
        }
      }
    }
  }

  faqs: allPrismicFaq {
    edges {
      node {
        data {
          title {
          text
        }
        body {
            primary {
              question {
                html
                text
              }
              answer {
                html
                text
              }
            }
          }
        }
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
  }
}
`
