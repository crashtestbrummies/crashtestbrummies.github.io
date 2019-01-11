import React from 'react'
import { graphql } from 'gatsby'
import { PlayedRow, NotPlayedRow } from './styles.js'

const brummiesStyle = { backgroundColor: '#fff' }

class Game extends React.Component {
  render () {
    const { Date, Home_Team, Visitor_Team, Score, Score_2 } = this.props.game
    const homeStyle = Home_Team === 'Brummies' ? brummiesStyle : {}
    const visitorStyle = Visitor_Team === 'Brummies' ? brummiesStyle : {}
    return (
      <PlayedRow>
        <td>{Date}</td>
        <td style={homeStyle}>{Home_Team}</td>
        <td style={homeStyle}>{Score}</td>
        <td style={visitorStyle}>{Visitor_Team}</td>
        <td style={visitorStyle}>{Score_2}</td>
      </PlayedRow>
    )
  }
}
export default Game

export const GameFragment = graphql`
  fragment Game_details on GamesNode {
    Date
    Home_Team
    Visitor_Team
    Score
    Score_2
  }
 `
