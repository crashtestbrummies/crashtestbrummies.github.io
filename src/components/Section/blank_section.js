import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-bottom: 4em;
  padding-bottom: 2em;
  color: #f5be0b;
  text-align: center;
`

const ContentWrapper = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 1em 2em 2em;
`

function BlankSection (props) {
  return (
    <Wrapper>
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
    </Wrapper>
  )
}

export default BlankSection
