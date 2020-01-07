import React, { Component } from 'react'

export default class TimesUp extends Component {

  onClick = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className="directions">
        <h1>Time's Up! You Lost!</h1>
        <br/>
        <button className="toggle-button" onClick={e => {
          this.onClick()
        }}>Try Again</button>
      </div>
    )
  }
}