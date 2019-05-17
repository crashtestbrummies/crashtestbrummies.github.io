import React from 'react'
import TeamMember from '../TeamMemeber'
import { Wrapper, Item, Header } from './styles.js'

class TeamList extends React.Component {
  renderListItem (item, i) {
    return (
      <Item key={`team_item_${i}`}><TeamMember memeber={item.primary} /></Item>
    )
  }

  renderList () {
    console.log(this.props.data)
    const { node: { data: { body } } } = this.props.data.edges[0]
    return body.map(this.renderListItem)
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
