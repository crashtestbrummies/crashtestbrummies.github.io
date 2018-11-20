import React from 'react'
import { graphql } from 'gatsby'
import styles from '../GamesList/styles.js'

class Game extends React.Component {
  render () {
    console.log(this.props)
    const { Date, Home_Team, Visitor_Team, Score, Score_2 } = this.props.game
    const style = Score ? styles.tr_played : styles.tr_not_played
    return (
      <tr style={style}>
        <td>{Date}</td>
        <td>{Home_Team}</td>
        <td>{Score}</td>
        <td>{Visitor_Team}</td>
        <td>{Score_2}</td>
      </tr>
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
