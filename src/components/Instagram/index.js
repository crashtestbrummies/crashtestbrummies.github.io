import React from 'react'
import { graphql } from 'gatsby'

class Instagram extends React.Component {
  render () {
    const {thumbnails, url} = this.props.instagram
    const [thumbnail] = thumbnails
    return (
      <a href={url}>
        <img src={thumbnail.src} alt={`Visit the Crash test Brummies Instagram page`} />
      </a>
    )
  }
}
export default Instagram

// export const InstagramFragment = graphql`
//   fragment Instagram_details on InstaNode {
//     id
//     url
//     original
//     thumbnails {
//       src
//       config_width
//       config_height
//     }
//   }
//  `
