import React from 'react'
import TeamMember from '../TeamMemeber'

class TeamList extends React.Component {
  renderListItem (edge, i) {
    return (
      <li key={`team_item_${i}`}><TeamMember memeber={edge.node} /></li>
    )
  }

  renderList () {
    const {edges} = this.props.data
    return (
      <ul>
        {edges.map(this.renderListItem)}
      </ul>
    )
  }

  render () {
    return (
      <section>
        <h2>Team</h2>
        {this.renderList()}
      </section>
    )
  }
}
export default TeamList
