import React from 'react'

class MatchCard extends React.Component {

  render() {
    console.log("props", this.props)
    return (
      <div className="card">
        <h3> {this.props.name} </h3>
        <img src={this.props.symbol} alt={this.props.name} className="symbol" /> 
      </div>
    )
  }
}

export default MatchCard 