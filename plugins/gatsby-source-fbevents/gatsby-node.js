const fetch = require('node-fetch')
const crypto = require('crypto')

const digest = str => crypto.createHash(`md5`).update(JSON.stringify(str)).digest(`hex`)

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Helper function that processes a photo to match Gatsby's node structure
  const processEvent = event => {
    const nodeId = createNodeId(`facebook-event-${event.id}`)
    const nodeContent = JSON.stringify(event)

    const nodeData = Object.assign({}, event, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `FacebookEvent`,
        content: nodeContent,
        contentDigest: digest(event)
      }
    })

    return nodeData
  }

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://graph.facebook.com/v3.1/CrashTestBrummies?fields=events&access_token=${configOptions.key}`
  console.log('tester')

  return (
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        data.events.data.forEach(
          event => createNode(processEvent(event))
        )
      })
  )
}
