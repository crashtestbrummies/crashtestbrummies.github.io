const crypto = require(`crypto`)
const fetchData = require('./fetchData.js')
const moment = require('moment')

function processDatum (datum) {
  console.log(datum)
  const date = moment(datum.Date, "MM-DD-YYYY").format()
  const id = '' + date + datum.Score + datum.Score_2
  const node = {
    id,
    date,
    parent: `__SOURCE__`,
    internal: { type: `GamesNode` },
    children: [],
    ...datum
  }

  // Get content digest of node. (Required field)
  const contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(node))
    .digest(`hex`)

  node.internal.contentDigest = contentDigest
  return node
}

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  { teamId }
) => {
  const { createNode } = actions

  return fetchData(teamId)
    .then(data => {
      data.forEach(
        datum => createNode(processDatum(datum))
      )
    })
    .catch(err => {
      console.log(err)
    })
}
