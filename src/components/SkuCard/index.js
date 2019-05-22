import React from 'react'
import styled from 'styled-components'
import media from '../_helpers/media'

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
  background-color: #fff;
  border-radius: 6px;
  min-width: 300px;
  margin: auto;

  ${media.tablet`
    margin: 0;
  `}
`

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px'
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  })
  return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
  async redirectToCheckout (event, sku, quantity = 1) {
    event.preventDefault()
    const url = window.location.origin + window.location.pathname
    const { error } = await this.props.stripe.redirectToCheckout({
      items: [{ sku, quantity }],
      successUrl: `${url}/success`,
      cancelUrl: url
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  render () {
    const sku = this.props.sku
    return (
      <CardStyles>
        <h4>{sku.attributes.name}</h4>
        <p>Price: {formatPrice(sku.price, sku.currency)}</p>
        <button
          style={buttonStyles}
          onClick={event => this.redirectToCheckout(event, sku.id)}
        >
          BUY ME
        </button>
      </CardStyles>
    )
  }
}

export default SkuCard
