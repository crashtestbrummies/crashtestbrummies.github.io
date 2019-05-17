import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { SponsorList, Sponsor } from './styles.js'

const sponsors = [
  {
    'id': 'firstPlace',
    'name': '1st Place 4 Trophies',
    'url': 'https://www.1stplace4trophies.co.uk/'
  },
  {
    'id': 'rsvp',
    'name': 'RSVP (Rape & Sexual Violence Project)',
    'url': 'https://rsvporg.co.uk/'
  },
  {
    'id': 'theatreTees',
    'name': 'Theater Tees & Print',
    'url': 'https://www.theatretees.co.uk/'
  }
]

export default props => (
  <StaticQuery
    query={graphql`
      query SponsorQuery {
        firstPlaceLogo: imageSharp(original: {src: {regex: "/first-place/"}}) {
          id
          original { src }
          fluid(maxWidth: 285) {
            ...GatsbyImageSharpFluid
          }
        }

        rsvpLogo: imageSharp(original: {src: {regex: "/rsvp/"}}) {
          id
          original { src }
          fluid(maxWidth: 285) {
            ...GatsbyImageSharpFluid
          }
        }

        theatreTeesLogo: imageSharp(original: {src: {regex: "/theatre-tees/"}}) {
          id
          original { src }
          fluid(maxWidth: 285) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={data => {
      return (
        <SponsorList>
          {sponsors.map(({ id, url, name }) => (
            <Sponsor key={`sponsor_${id}`}>
              <a href={url} target={`_blank`} rel={`nofollow`} title={name}>
                <Img fluid={data[`${id}Logo`].fluid} alt={name} />
              </a>
            </Sponsor>
          ))}
        </SponsorList>
      )
    }}
  />
)
