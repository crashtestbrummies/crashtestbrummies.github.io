import React from 'react'
import { graphql } from 'gatsby'

const TeamMember = ({ data: { prismicTeamMember, teamMembers }, location }) => {
  return (
    <div>
      It worked
    </div>
  )
}

export default TeamMember

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query TeamMemberBySlug($uid: String!) {
    prismicTeamMember(uid: { eq: $uid }) {
      uid
    }
  }
`
