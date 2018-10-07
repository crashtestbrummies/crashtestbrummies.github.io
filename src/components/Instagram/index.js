import React from 'react'

class Instagram extends React.Component {
  render () {
    console.log(this.props)
    const {thumbnails, url} = this.props.instagram
    const [thumbnail] = thumbnails
    console.log(url)
    return (
      <a href={url}>
        <img src={thumbnail.src} />
      </a>
    )
  }
}
export default Instagram

export const InstagramFragment = graphql`
  fragment Instagram_details on InstaNode {
    id
    url
    original
    thumbnails {
      src
      config_width
      config_height
    }
  }
 `
