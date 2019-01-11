import React from 'react'
import BlankSection from './blank_section.js'
import TearSection from './tear_section.js'

function Section (props) {
  if (props.theme === 'tear') {
    return <TearSection children={props.children} />
  }

  return <BlankSection children={props.children} />
}

export default Section
