import React from 'react'
import Grid from 'react-css-grid'
import TeamMember from '../TeamMemeber'

class TeamList extends React.Component {
  renderListItem (edge, i) {
    return (
      <div key={`team_item_${i}`}><TeamMember memeber={edge.node} /></div>
    )
  }

  renderList () {
    const {edges} = this.props.data
    return edges.map(this.renderListItem)
  }

  render () {
    return (
      <section>
        <h2>Team</h2>
        <Grid width={150}>
          {this.renderList()}
        </Grid>
      </section>
    )
  }
}
export default TeamList
