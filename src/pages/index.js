import React from 'react'
import { graphql } from 'gatsby'
import TeamList from '../components/TeamList'
import FAQs from '../components/FAQs'
import GamesList from '../components/GamesList'
import Layout from '../components/layout'
import Section from '../components/Section'

const getTextSectionTitle = (data) => data.edges[0].node.data.title.text
const getTextSectionContent = (data) => data.edges[0].node.data.content.html

class IndexPage extends React.Component {
  render () {
    const {
      aTeam, faqs, who, join,
      site, allGamesNode, logo, heroText, hero
    } = this.props.data
    return (
      <Layout site={site} logo={logo.edges[0].node} heroText={heroText.edges[0].node} hero={hero.edges[0].node} >
        <Section theme='tear'>
          <h2>{getTextSectionTitle(who)}</h2>
          <div dangerouslySetInnerHTML={{ __html: getTextSectionContent(who)}} />
        </Section>
        <Section>
          <TeamList data={aTeam} />
        </Section>
        <Section theme='tear'>
          <section id={'join-us'}>
            <h2>{getTextSectionTitle(join)}</h2>
            <div dangerouslySetInnerHTML={{ __html: getTextSectionContent(join)}} />
          </section>
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

  join:allPrismicTextSection(filter: { slugs: {eq:"join-us"} }) {
    edges {
      node {
        data {
          title {
            html
            text
          }
          content {
            html
            text
          }
        }
      }
    }
  }
  
  who:allPrismicTextSection(filter: { slugs: {eq:"who-are-we"} }) {
    edges {
      node {
        data {
          title {
            html
            text
          }
          content {
            html
            text
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
