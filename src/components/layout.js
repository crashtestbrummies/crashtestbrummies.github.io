import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import SanitiseCSS from './layout_sanitise.css.js'
import BaseCSS from './layout_base.css.js'
import Section from '../components/Section'

const Wrapper = styled.section`
  background: #010101;
`

const TemplateWrapper = ({ site, logo, hero, heroText, sponsors, children }) => {
  return (
    <Wrapper>
      <SanitiseCSS />
      <BaseCSS />
      <Header data={site} logo={logo} hero={hero} heroText={heroText} />
      {children}
      <Section>
        <Footer data={{ ...site, sponsors }} />
      </Section>
    </Wrapper>
  )
}

export default TemplateWrapper
