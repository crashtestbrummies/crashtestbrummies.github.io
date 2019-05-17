import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import media from '../components/_helpers/media'
import Layout from '../components/layout'
import Section from '../components/Section'

export const Title = styled.h1`
  font-size: 2em;
  margin-top: 1.5em;

  ${media.tablet`
    font-size: 1.2em;
  `}
`

class SchedulesPage extends React.Component {
  render () {
    const {
      schedules,
      site, logo
    } = this.props.data
    return (
      <Layout site={site} logo={logo.edges[0].node} >
        <Section theme='tear'>
          <Title>Schedules</Title>
          <ul>
            {
              schedules.edges.map((edge) => {
                return (
                  <li><a href={`/schedule/${edge.node.uid}`}>{`${edge.node.data.game_date} - ${edge.node.data.game_name.text}`}</a></li>
                )
              })
            }
          </ul>
        </Section>
      </Layout>
    )
  }
}

export default SchedulesPage

export const query = graphql`
  query {
  schedules: allPrismicGameSchedule(
    sort: {
      fields: [data___game_date]
      order: DESC
    }
  ) {
    edges {
      node {
        uid
        data {
          game_date
          game_name {
            text
          }
        }
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

  }
`
