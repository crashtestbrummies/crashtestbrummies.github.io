import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

const TemplateWrapper = ({ site, children }) => {
  return (
    <div>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }}
      >
        {children}
      </div>
      <Footer data={site} />
    </div>
  )
}

export default TemplateWrapper
