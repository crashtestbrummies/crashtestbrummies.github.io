import React from 'react'
import Grid from 'react-css-grid'

const content = [
  {
    question: 'When/Where do you train?',
    answer: 'Sunday evenings 6:30-9:30pm at Leasowes High School, Kent Rd, Halesowen, West Midlands, B62 8PJ'
  },
  {
    question: 'How much does it cost?',
    answer: 'Your first session is free. Following that, each session is £5.'
  },
  {
    question: 'I can\'t skate or haven\'t skated in years, can I play?',
    answer: 'Fear not, we will teach you how to skate and put you through our ‘fresh meat’ programme to get you up to speed.'
  },
  {
    question: 'What equipment do I need?',
    answer: 'We can provide you with the gear to get you started. It is not a good idea to splash out on your own gear before deciding roller derby is for you. Please let us know your size requirements in advance.'
  }
]

class FAQs extends React.Component {
  renderFAQ (faq, i) {
    return (
      <React.Fragment key={`faq_${i}`}>
        <dt>{faq.question}</dt>
        <dd>{faq.answer}</dd>
      </React.Fragment>
    )
  }

  render () {
    return (
      <section>
        <h2>FAQs</h2>
        <Grid>
          <dl>
            {content.map(this.renderFAQ)}
          </dl>
        </Grid>
      </section>
    )
  }
}
export default FAQs
