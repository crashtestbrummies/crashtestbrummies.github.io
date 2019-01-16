import React from 'react'
import { List, Title, Description } from './styles.js'
import Markdown from 'markdown-it'

const md = new Markdown({
  linkify: true
})

const content = [
  {
    question: 'When/Where do you train?',
    answer: `Sunday evenings (open to all pre and post-mins skaters) 4:00-7:00pm at Leasowes High School, Kent Rd, Halesowen, West Midlands, B62 8PJ – there are occasions when we will have closed door events, so please check our Facebook page or contact us before travelling to us.

Tuesday evenings (this is only open to minimum skills passed skaters) 8:00-10:00pm at Bournville College, 1 Longbridge Ln, Birmingham, B31 2TW – there are occasions when this venue is unavailable, so please check our Facebook page or contact us before travelling to us.`
  },
  {
    question: 'How much does it cost?',
    answer: 'Your first session is free. Following that, each session is £5, or you can take up one of our membership options.'
  },
  {
    question: 'I can\'t skate or haven\'t skated in years, can I play?',
    answer: 'Fear not, we will teach you how to skate and put you through our pre-mins programme to get you up to the required level.'
  },
  {
    question: 'What equipment do I need?',
    answer: 'We can provide you with the gear to get you started. It is not a good idea to splash out on your own gear before deciding roller derby is for you. Please let us know your size requirements in advance.'
  },
  {
    question: 'I really want to get involved but I do not want to play, what can I do?',
    answer: 'The Brummies love officials, because without them we wouldn’t be able to compete in this amazing sport. The Brummies offer training and support to both Skating and Non-Skating officials.'
  }
]

class FAQs extends React.Component {
  renderFAQ (faq, i) {
    const content = md.render(faq.answer)
    return (
      <React.Fragment key={`faq_${i}`}>
        <Title>{faq.question}</Title>
        <Description dangerouslySetInnerHTML={{ __html: content }} />
      </React.Fragment>
    )
  }

  render () {
    return (
      <section>
        <h2>FAQs</h2>
        <List>
          {content.map(this.renderFAQ)}
        </List>
      </section>
    )
  }
}
export default FAQs
