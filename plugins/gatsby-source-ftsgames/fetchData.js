var tabletojson = require('tabletojson')

module.exports = function (teamId) {
  const url = `http://flattrackstats.com/teams/${teamId}`

  return new Promise(function (resolve, reject) {
    tabletojson.convertUrl(url, function (tablesAsJson) {
      resolve(tablesAsJson[6])
    })
  })
}
