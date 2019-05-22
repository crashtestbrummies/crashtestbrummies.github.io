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

const SuccessSection = styled.section`
  background-color: #91fb91;
  color: #004400;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 0.8em;
  text-align: center;
  padding: .5em;
  text-transform: uppercase;
`

const SkusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: 'space-between';
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

const Success = ({ pageContext: { success } }) => {
  if (!success) return null
  return (
    <SuccessSection>
      <p>Thank you for your purchase!</p>
    </SuccessSection>
  )
}

const setupStripe = function (stripePublishableKey) {
  if (typeof window === 'undefined') return {}
  return window.Stripe(stripePublishableKey, {
    betas: ['checkout_beta_4']
  })
}

const Product = ({ pageContext, data: { stripeProduct, allStripeSku, teamMembers, site, logo }, location }) => {
  let stripe = setupStripe(site.siteMetadata.stripe_publishable_key)
  return (
    <Layout site={site} logo={logo.edges[0].node} >
      <Success pageContext={pageContext} />
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
    siteMetadata {
      stripe_publishable_key
    }
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
