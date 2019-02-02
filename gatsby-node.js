const path = require('path')

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { error, result } = await wrapper(
    graphql(`
      {
        allPrismicTeamMember {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
  )

  console.log('error, result')
  console.log(error, result)

  if (!error) {
    const teamMembersList = result.data.allPrismicTeamMember.edges
    console.log(teamMembersList)
    const teamMemberTemplate = path.resolve('src/templates/teamMember.js')
    teamMembersList.forEach(edge => {
      // The uid you assigned in Prismic is the slug!
      createPage({
        path: `/team/${edge.node.uid}`,
        component: teamMemberTemplate,
        context: {
          // Pass the unique ID (uid) through context so the template can filter by it
          uid: edge.node.uid
        }
      })
    })

    return
  }

  console.log(error)
  console.log(error)
}
