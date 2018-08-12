import React from 'react'

class Team extends React.Component {

  renderListItem(edge, i) {
    const {name} = edge.node
    return (
      <li key={`team_item_${i}`}>{name}</li>
    )
  }

  renderList() {
    const {edges} = this.props.data
    return (
      <ul>
        {edges.map(this.renderListItem)}
      </ul>
    )
  }

  render() {
    console.log(this.props)
    return (
      <section>
        <h2>Team</h2>
        {this.renderList()}
      </section>
    )
  }
}
export default Team
