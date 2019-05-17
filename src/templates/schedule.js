import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import media from '../components/_helpers/media'
import moment from 'moment'
import Layout from '../components/layout'
import Section from '../components/Section'

export const Title = styled.h1`
  font-size: 2em;
  margin-top: 1.5em;

  ${media.tablet`
    font-size: 1.2em;
  `}
`

export const SubTitle = styled.h3`
  font-size: 1.5em;
`

export const LightLink = styled.a`
  color: #f5be0b;
`

const googleMapsLinkFromLocation = ({ latitude, longitude }) => {
  return `https://www.google.co.uk/maps/@${latitude},${longitude},16z`
}

const OtherDetails = ({ data: { other_details } }) => {
  return (
    <Section theme={`tear`}>
      <h2>Other Details</h2>
      <div dangerouslySetInnerHTML={{ __html: other_details.html }} />
    </Section>
  )
}

const OtherTransport = ({ data: { other_transport } }) => {
  return (
    <Section>
      <h2>Other Transport</h2>
      <ul>
        {
          other_transport.map((item) => {
            return (
              <li>
                <SubTitle>{item.name.text}</SubTitle>
                <div dangerouslySetInnerHTML={{ __html: item.details.html }} />
              </li>
            )
          })
        }
      </ul>
    </Section>
  )
}

const Parking = ({ data: { parking } }) => {
  return (
    <Section theme={`tear`}>
      <h2>Parking</h2>
      <ul>
        {
          parking.map((item) => {
            return (
              <li>
                <SubTitle><a href={googleMapsLinkFromLocation(item.parking_location)}>{item.name.text}</a></SubTitle>
                <div dangerouslySetInnerHTML={{ __html: item.description.html }} />
              </li>
            )
          })
        }
      </ul>
    </Section>
  )
}

const ScheduleEvents = ({ data: { schedule_events } }) => {
  return (
    <Section>
      <h2>Schedule</h2>
      <ul>
        {
          schedule_events.map((item) => {
            return (
              <li>
                <time datetime={item.time}>{moment(item.time).format('h:mm:ss a')}</time>
                <div dangerouslySetInnerHTML={{ __html: item.event.html }} />
              </li>
            )
          })
        }
      </ul>
    </Section>
  )
}

const Details = ({ data: { game_name, game_date, game_link, venue_address, venue_location } }) => {
  return (
    <Section theme={`tear`}>
      <Title>{game_date} - {game_name.text}</Title>
      <p>{venue_address.text}</p>
      <p><a href={googleMapsLinkFromLocation(venue_location)}>View Venue On Map</a> - <a href={game_link.url}>View Facebook Event</a></p>
    </Section>
  )
}

const Schedule = ({ data: { prismicGameSchedule, teamMembers, site, logo }, location }) => {
  return (
    <Layout site={site} logo={logo.edges[0].node} >
      <Details data={prismicGameSchedule.data} />
      <ScheduleEvents data={prismicGameSchedule.data} />
      <Parking data={prismicGameSchedule.data} />
      <OtherTransport data={prismicGameSchedule.data} />
      <OtherDetails data={prismicGameSchedule.data} />
    </Layout>
  )
}

export default Schedule

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query ScheduleBySlug($uid: String!) {
    prismicGameSchedule(uid: { eq: $uid }) {
      uid
      data {
        game_name {
          text
        }
        game_date
        game_link {
          url
        }
        venue_address {
          text
        }
        venue_location {
          latitude
          longitude
        }

        schedule_events {
          time
          event {
            html
          }
        }

        parking {
          parking_location {
            latitude
            longitude
          }
          name {
            html
            text
          }
          description {
            html
            text
          }
        }

        other_transport {
          location {
            latitude
            longitude
          }
          name {
            html
            text
          }
          details {
            html
            text
          }
        }

        other_details {
          html
          text
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
