import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

class Header extends React.Component {
  render () {
    const {title, canonical, description} = this.props.data.siteMetadata
    return (
      <div
        style={{
          background: 'black',
          color: 'white',
          marginBottom: '1.45rem'
        }}
      >
        <Helmet>
          <meta charSet='utf-8' />
          <title>{title}</title>
          <link rel='canonical' href={canonical} />
          <meta name='description' content={description} />
          <meta property='og:type' content='website' />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem'
          }}
        >
          <h1 style={{ margin: 0 }}>{title}</h1>
        </div>
      </div>
    )
  }
}

export default Header

export const HeaderFragment = graphql`
  fragment Header_details on Site {
    siteMetadata {
      title
      canonical
      description
    }
  }
`
