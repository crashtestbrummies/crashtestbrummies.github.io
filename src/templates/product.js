import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import media from '../components/_helpers/media'
import Layout from '../components/layout'
import Section from '../components/Section'
import SkuCard from '../components/SkuCard'

export const Title = styled.h1`
  font-size: 2em;
  margin-top: 1.5em;

  ${media.tablet`
    font-size: 1.2em;
  `}
`

const SkusWrapper = styled.div`
  display: flex;
  flexDirection: row;
  flexWrap: wrap;
  justifyContent: 'space-between';
  padding: 1rem 0 1rem 0;
`

export const SubTitle = styled.h3`
  font-size: 1.5em;
`

export const LightLink = styled.a`
  color: #f5be0b;
`

const Details = ({ data: { name, caption, description, images } }) => {
  return (
    <React.Fragment>
      <Title>{name}</Title>
      <p>{caption}</p>
      <p>{description}</p>
      <img src={images[0]} />
    </React.Fragment>
  )
}

const setupStripe = function () {
  if (typeof window === 'undefined') return {}
  return window.Stripe('pk_test_HJvmGm31rcEMthB1vy3uvels00W8d22CJW', {
    betas: ['checkout_beta_4']
  })
}

const Product = ({ data: { stripeProduct, allStripeSku, teamMembers, site, logo }, location }) => {
  let stripe = setupStripe()
  return (
    <Layout site={site} logo={logo.edges[0].node} >
      <Section theme={`tear`}>
        <Details data={stripeProduct} />
        <SkusWrapper>
        {allStripeSku.edges.map(({ node: sku }) => (
          <SkuCard key={sku.id} sku={sku} stripe={stripe} />
        ))}
        </SkusWrapper>
      </Section>
    </Layout>
  )
}

export default Product

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query ProductById($id: String!) {
    stripeProduct(id: {eq: $id}) {
      name
      caption
      images
      description
    }

    allStripeSku(filter: {product: {id: {eq: $id}}}) {
      edges {
        node {
          id
          currency
          price
          attributes {
            name
          }
        }
      }
    }

  site {
    ...Navigation_details
    ...Header_details
    ...Footer_details
  }
  logo: allFile(filter: {relativePath: {eq: "images/crash_test_brummies-logo.png"}}) {
    edges {
      node {
        ...Navigation_logo
      }
    }
  }

  }
`
