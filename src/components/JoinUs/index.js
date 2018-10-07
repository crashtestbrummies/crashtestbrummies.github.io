import React from 'react'
import Grid from 'react-css-grid'

import Markdown from 'markdown-it'

const md = new Markdown({
  linkify: true
})

const content = md.render(`
We are always on the look out for new skaters to join our ranks!

Keep an eye on our Facebook page for upcoming events and intakes [here](https://www.facebook.com/CrashTestBrummies) or get in touch with us at info@crashtestbrummies.co.uk.

Already a derby skater? No worries!! We have an open door policy for existing derby skaters both male & female – just turn up and get stuck in!
`)

class JoinUs extends React.Component {
  render () {
    return (
      <section>
        <h2>Join us</h2>
        <Grid>
          <div dangerouslySetInnerHTML={{__html: content}} />
        </Grid>
      </section>
    )
  }
}
export default JoinUs
