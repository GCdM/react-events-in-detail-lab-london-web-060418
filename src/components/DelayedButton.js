import React, { Component } from 'react'

class DelayedButton extends Component {

  handleButton = (event) => {
    event.persist()
    setTimeout(
      () => { this.props.onDelayedClick(event) },
      this.props.delay
    )
  }

  render() {
    return (
      <button onClick={this.handleButton} ></button>
    )
  }
}

export default DelayedButton
