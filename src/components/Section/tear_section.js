import React from 'react'
import styled from 'styled-components'
import TopTearImage from '../../images/section_bg_top.png'
import BottomTearImage from '../../images/section_bg_bottom.png'

const Wrapper = styled.div`
  background: #f5be0b;
  transform: rotate(-2deg);
  width: 110%;
  margin-left: -5%;
  margin-bottom: 6em;
  color: #010101;
  text-align: center;
`

const ContentWrapper = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 1em 2em 2em;
`

const TopTear = styled.i`
  display: block;
  height: 22px;
  width: 100%;
  position: relative;
  top: -21px;

  background-image: url(${props => props.image});
  background-position-x: center;
  background-position-y: -20px;
  background-repeat: repeat;
  background-size: unset;
`

const BottomTear = styled.i`
  display: block;
  height: 32px;
  width: 100%;
  position: relative;
  bottom: -28px;

  background-image: url(${props => props.image});
  background-position-x: center;
  background-position-y: -209px;
  background-repeat: repeat;
  background-size: unset;
`

function TearSection (props) {
  return (
    <Wrapper>
      <TopTear image={TopTearImage} />
      <ContentWrapper>
        {props.children}
      </ContentWrapper>
      <BottomTear image={BottomTearImage} />
    </Wrapper>
  )
}

export default TearSection
