const path = require('path')

// graphql function returns a promise so we can use this little promise helper to have a nice result/error state
const wrapper = promise => promise.then(result => ({ result, error: null })).catch(error => ({ error, result: null }))

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  console.log('pre graphql')
  const { error, result } = await wrapper(
    graphql(`
      {
        allPrismicGameSchedule {
          edges {
            node {
              id
              uid
            }
          }
        }

        allStripeProduct {
          edges {
            node {
              id
              url
            }
          }
        }
      }
    `)
  )

  console.log('post graphql')
  if (!error) {
    const schedulesList = result.data.allPrismicGameSchedule.edges
    const scheduleTemplate = path.resolve('src/templates/schedule.js')
    schedulesList.forEach(edge => {
      // The uid you assigned in Prismic is the slug!
      createPage({
        path: `/schedule/${edge.node.uid}`,
        component: scheduleTemplate,
        context: {
          // Pass the unique ID (uid) through context so the template can filter by it
          uid: edge.node.uid
        }
      })
    })

    const productsList = result.data.allStripeProduct.edges
    console.log('product lists', result.data.allStripeProduct)
    const productTemplate = path.resolve('src/templates/product.js')
    productsList.forEach(edge => {
      // The uid you assigned in Prismic is the slug!
      createPage({
        path: `/shop/${edge.node.url.split('/shop/').pop()}`,
        component: productTemplate,
        context: {
          // Pass the unique ID (uid) through context so the template can filter by it
          id: edge.node.id
        }
      })
    })

    return true
  }
}
