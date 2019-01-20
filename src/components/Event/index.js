import React from 'react'
import { graphql } from 'gatsby'
import Markdown from 'markdown-it'

const md = new Markdown({
  linkify: true
})

class Event extends React.Component {
  render () {
    const {name, description} = this.props.event
    return (
      <div>
        <h2>{name}</h2>
        <div dangerouslySetInnerHTML={{__html: md.render(description)}} />
      </div>
    )
  }
}
export default Event

// export const EventFragment = graphql`
//   fragment Event_details on FacebookEvent {
//     name
//     description
//     place {
//       id
//       name
//       location {
//         street
//         city
//         zip
//       }
//     }
//   }
//  `
