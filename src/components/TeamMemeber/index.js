import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

class TeamMember extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hovered: false
    }

    this.handleInteraction = this.handleInteraction.bind(this)
  }

  handleInteraction () {
    this.setState({
      hovered: true
    })
  }

  renderHeadshot () {
    const {memeber} = this.props
    const type = this.state.hovered ? 'image' : 'peaky_image'
    return (<Img sizes={memeber[type].childImageSharp.sizes} alt={memeber.name} />)
  }

  render () {
    const {hovered} = this.state
    const handler = hovered ? null : this.handleInteraction
    return (
      <div onMouseOver={handler} onClick={handler}>
        {this.renderHeadshot()}
      </div>
    )
  }
}
export default TeamMember

export const TeamMemberFragment = graphql`
  fragment TeamMember_details on PlayersJson {
    id
    name
    position

    peaky_image {
      id
      childImageSharp {
        sizes(maxWidth: 900) {
          tracedSVG
          ...GatsbyImageSharpSizes
        }
      }
    }

    image {
      id
      childImageSharp {
        sizes(maxWidth: 900) {
          tracedSVG
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
