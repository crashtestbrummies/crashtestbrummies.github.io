import React from 'react'
import Event from '../Event'

class EventsList extends React.Component {
  renderListItem (edge, i) {
    return (
      <div key={`event_item_${i}`}><Event event={edge.node} /></div>
    )
  }

  renderList () {
    const { edges } = this.props.data
    return edges.map(this.renderListItem)
  }

  render () {
    return (
      <section>
        <h2>Events</h2>
        {this.renderList()}
      </section>
    )
  }
}
export default EventsList
