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
    const { name, number, image } = this.props.memeber
    return (
      <Wrapper>
        <Img fluid={image.childImageSharp.fluid} alt={name} />
        <Text>{number} {'//'} {name}</Text>
      </Wrapper>
    )
  }
}
export default TeamMember

export const TeamMemberFragment = graphql`
  fragment TeamMember_details on PlayersJson {
    id
    name
    number

    peaky_image {
      id
      childImageSharp {
        fluid(maxWidth: 170) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    image {
      id
      childImageSharp {
        fluid(maxWidth: 288) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
