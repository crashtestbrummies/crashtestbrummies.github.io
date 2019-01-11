import React from 'react'
import Instagram from '../Instagram'
import { Wrapper, Item } from './styles.js'

class InstagramList extends React.Component {
  renderListItem (edge, i) {
    return (
      <Item key={`insta_item_${i}`}><Instagram instagram={edge.node} /></Item>
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
        <Wrapper>
          {this.renderList()}
        </Wrapper>
      </section>
    )
  }
}
export default InstagramList
