import React from 'react'
import Header from './Header'
import Footer from './Footer'

const TemplateWrapper = ({ site, children }) => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      <Header data={site} />
      {children}
      <Footer data={site} />
    </div>
  )
}

export default TemplateWrapper
