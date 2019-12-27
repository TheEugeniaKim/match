import React from 'react'

class MatchCard extends React.Component {

  state = {
    front: false
  }

  handleClick = (id, name) => { 
    let cardObj = {id,name}
    this.props.setFlippedCards(cardObj)

    return this.setState({
      front: !this.state.front
    })
  }

  // this.handleClick(this.props.id, this.props.name)
  render() {
    return (
      <div onClick={null}>
        <div className="card">
          <h3 className="card-text"> { this.state.front ? this.props.name : "" } </h3>
          <img src={this.state.front ? this.props.symbol : "/question.png"} alt={this.props.name} className="symbol" /> 
        </div>
      </div>
    )
  }
}

export default MatchCard 