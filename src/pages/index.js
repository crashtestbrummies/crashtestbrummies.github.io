import React from 'react'
import Link from 'gatsby-link'
import Team from '../components/Team'

class IndexPage extends React.Component {
  render() {
    const {allTeamJson} = this.props.data
    return (
      <div>
        <p>The West Midlands' first men's Roller Derby team</p>
        <p>A band of Brummie brothers brought together in February 2012. All skatin', no hatin'!</p>
        <Team data={allTeamJson} />
      </div>
    )
  }
}

// const IndexPage = ({data}) => {
//   console.log(data);
//   return (
//     <div>
//       <h1>Hi people</h1>
//       <p>Welcome to your new Gatsby site.</p>
//       <p>Now go build something great.</p>
//       <Link to="/page-2/">Go to page 2</Link>
//       <Team />
//     </div>
//   )
// }

export default IndexPage

export const query = graphql`
query TeamQuery {
  allTeamJson {
    edges {
      node {
        name
          position
      }
    }
  }
}
`
