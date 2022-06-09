import React from 'react'
import { List, Title, Description } from './styles.js'

class FAQs extends React.Component {
  renderFAQ (faq, i) {
    return (
      <React.Fragment key={`faq_${i}`}>
        <Title>{faq.primary.question.text}</Title>
        <Description dangerouslySetInnerHTML={{ __html: faq.primary.answer.html }} />
      </React.Fragment>
    )
  }

  render () {
    const content = this.props.data.edges[0].node.data
    return (
      <section>
        <h2>{content.title.text}</h2>
        <List>
          {content.body.map(this.renderFAQ)}
        </List>
      </section>
    )
  }
}
export default FAQs
