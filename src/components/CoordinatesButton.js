import React, { Component } from 'react'

class CoordinatesButton extends Component {

  handleButton = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.handleButton} ></button>
    )
  }
}

export default CoordinatesButton
