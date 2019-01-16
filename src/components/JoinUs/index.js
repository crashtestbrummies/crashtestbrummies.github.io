import React from 'react'
import Grid from 'react-css-grid'

import Markdown from 'markdown-it'

const md = new Markdown({
  linkify: true
})

const content = md.render(`
We are always on the look out for new members, from people who have never skated before to already established skaters looking for a league in the West Midlands.

Keep an eye on our [Facebook page](https://www.facebook.com/CrashTestBrummies/) for upcoming events and intakes or [get in touch with us](http://m.me/CrashTestBrummies/).

Already a derby skater? No worries!! We have an open door policy that is Open To All derby skaters – just turn up and get stuck in! The only exception to this is if we have an organised game against your league announced (sorry).
`)

class JoinUs extends React.Component {
  render () {
    return (
      <section id={'join-us'}>
        <h2>Join us</h2>
        <Grid>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Grid>
      </section>
    )
  }
}
export default JoinUs
