import React from 'react'
import Grid from 'react-css-grid'
import Instagram from '../Instagram'
import styled from 'styled-components'

class InstagramList extends React.Component {
  renderListItem (edge, i) {
    return (
      <div key={`insta_item_${i}`}><Instagram instagram={edge.node} /></div>
    )
  }

  renderList () {
    const { edges } = this.props.data
    return edges.map(this.renderListItem)
  }

  render () {
    return (
      <section>
        <h2>Instagram</h2>
        <Grid width={200} gap={20}>
          {this.renderList()}
        </Grid>
      </section>
    )
  }
}
export default InstagramList
