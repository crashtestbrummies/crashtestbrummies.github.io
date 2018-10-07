const fetch = require('node-fetch')
const cheerio = require(`cheerio`)
const crypto = require(`crypto`)

function getInstagramPosts (response) {
  const $ = cheerio.load(response)
  const jsonData = $(`html > body > script`)
          .get(0).children[0].data
          .replace(/window\._sharedData\s?=\s?{/, `{`)
          .replace(/;$/g, ``)
  const json = JSON.parse(jsonData).entry_data.ProfilePage[0].graphql
  const photos = []
  json.user.edge_owner_to_timeline_media.edges.forEach((edge) => {
    if (edge.node) {
      photos.push(edge.node)
    }
  })
  return photos
}

function processDatum (datum) {
  const node = {
    id: datum.shortcode,
    parent: `__SOURCE__`,
    internal: { type: `InstaNode` },
    children: [],
    likes: datum.edge_liked_by,
    thumbnails: datum.thumbnail_resources,
    original: datum.display_url,
    timestamp: datum.taken_at_timestamp,
    dimensions: datum.dimensions,
    url: `https://www.instagram.com/p/${datum.shortcode}`
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
  { boundActionCreators, createNodeId, createContentDigest },
  { username }
) => {
  const { createNode } = boundActionCreators

  return fetch(`https://www.instagram.com/${username}/`)
    .then(res => res.text())
    .then(getInstagramPosts)
    .then(data => {
      data.forEach(
        datum => createNode(processDatum(datum))
      )
    })
}
