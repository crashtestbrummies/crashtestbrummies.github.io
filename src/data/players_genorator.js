const testFolder = './images/'
const fs = require('fs')
const players = {}

fs.readdirSync(testFolder).forEach(file => {
  if (file.includes('_web')) return false

  let name = file.replace('.jpg', '').replace('_peaky', '')
  const us = file.indexOf('_')

  players[name] = players[name] || {}
  players[name].name = name
  players[name].position = 'Blocker'

  if (us !== -1) {
    players[name]['peaky_image'] = `images/${file}`
  } else {
    players[name]['image'] = `images/${file}`
  }
})

const playersArray = []
for (var player in players) {
  playersArray.push(players[player])
}
console.log(JSON.stringify(playersArray))
