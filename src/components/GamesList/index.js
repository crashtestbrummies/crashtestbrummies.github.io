import React from 'react'
import Game from '../Game'
import styles from './styles.js'

class GamesList extends React.Component {
  renderListItem (edge, i) {
    return (
      <Game key={`game_item_${i}`} game={edge.node} />
    )
  }

  renderList () {
    const { edges } = this.props.data
    return edges.map(this.renderListItem)
  }

  render () {
    return (
      <section>
        <h2>Games</h2>
        <table style={styles.table}>
          <thead>
            <th>Date</th>
            <th>Home</th>
            <th>Score</th>
            <th>Away</th>
            <th>Score</th>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </section>
    )
  }
}
export default GamesList
