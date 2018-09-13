/* global graphql */
import React from 'react'
import Img from 'gatsby-image'

class TeamMember extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hovered: false
    }

    this.handleHover = this.handleHover.bind(this)
  }

  handleHover () {
    this.setState({
      hovered: !this.state.hovered
    })
  }

  renderHeadshot () {
    console.log(this.props)
    const {memeber} = this.props
    const type = this.state.hovered ? 'image' : 'peaky_image'
    return (<Img sizes={memeber[type].childImageSharp.sizes} />)
  }

  render () {
    return (
      <div onMouseOut={this.handleHover} onMouseOver={this.handleHover}>
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
