import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import { PlayedRow, NotPlayedRow } from './styles.js'

const brummiesStyle = { backgroundColor: '#fff' }

class Game extends React.Component {
  render () {
    const { Date, Home_Team, Visitor_Team, Score, Score_2 } = this.props.game
    const homeStyle = Home_Team === 'Brummies' ? brummiesStyle : {}
    const visitorStyle = Visitor_Team === 'Brummies' ? brummiesStyle : {}
    const date = moment(Date)
    const Row = date.isBefore(moment()) ? PlayedRow : NotPlayedRow
    return (
      <Row>
        <td>{date.format('DD/MM/YY')}</td>
        <td style={homeStyle}>{Home_Team}</td>
        <td style={homeStyle}>{Score}</td>
        <td style={visitorStyle}>{Visitor_Team}</td>
        <td style={visitorStyle}>{Score_2}</td>
      </Row>
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
