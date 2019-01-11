import React from 'react'
import Game from '../Game'
import { GameTable } from './styles.js'

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
        <GameTable>
          <thead>
            <tr>
              <th>Date</th>
              <th>Home</th>
              <th>Score</th>
              <th>Away</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </GameTable>
      </section>
    )
  }
}
export default GamesList
