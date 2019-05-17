import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Wrapper, Text } from './styles.js'

class TeamMember extends React.Component {
  renderHeadshot () {
    const { memeber } = this.props
    const type = this.state.hovered ? 'peaky_image' : 'image'
    return (<Img fluid={memeber[type].childImageSharp.fluid} alt={memeber.name} />)
  }

  render () {
    const { name, number, headshot: { localFile } } = this.props.memeber
    return (
      <Wrapper>
        <Img fluid={localFile.childImageSharp.fluid} alt={name} />
        <Text>{number} {'//'} {name}</Text>
      </Wrapper>
    )
  }
}
export default TeamMember

export const TeamMemberFragment = graphql`
fragment TeamMember_details on PrismicRosterBodyName {
  slice_type
  id
  primary {
    name
    number
    headshot {
      alt
      copyright
      url
      localFile {
        childImageSharp {
          fluid(maxWidth: 288) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
}
`
