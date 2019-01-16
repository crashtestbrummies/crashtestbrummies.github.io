import React from 'react'
import TeamMember from '../TeamMemeber'
import { Wrapper, Item, Header } from './styles.js'

class TeamList extends React.Component {
  renderListItem (edge, i) {
    return (
      <Item key={`team_item_${i}`}><TeamMember memeber={edge.node} /></Item>
    )
  }

  renderList () {
    const { edges } = this.props.data
    return edges.map(this.renderListItem)
  }

  render () {
    return (
      <section id={'team'}>
        <Header>The Team</Header>
        <Wrapper>
          {this.renderList()}
        </Wrapper>
      </section>
    )
  }
}
export default TeamList
