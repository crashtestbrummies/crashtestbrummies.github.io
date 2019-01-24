import React from 'react'
import styled from 'styled-components'
import maintenanceImg from '../../data/images/maintenance.jpg'

const Image = styled.div`
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    z-index: 10;
`

class Maintenance extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render () {
    const hideStyle = {}
    let { count } = this.state
    if (count > 9) hideStyle.display = 'none'

    return (
      <Image
        image={maintenanceImg}
        style={hideStyle}
        onClick={() => {this.setState({ count: ( count + 1 ) }) }}
      />
    )
  }
}
export default Maintenance
