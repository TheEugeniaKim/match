import React from 'react'
import {connect} from 'react-redux'
import {flipCard} from '../redux/actions'

class MatchCard extends React.Component {
  
  handleClick = () => { 
    
    return (null)
  }

  checkTwoCardsFlipped = () => {
    if (this.props.flippedCards.length < 2) {
      return false 
    }
    else {return false}
  }

  checkIfCardFlipped = () => {
    if (this.props.flippedCards.map(flippedCard => flippedCard.id === this.props.id)) {
      return true 
    }
  }

  render() {
    console.log("flippedCards", this.props.flippedCards)
    return (
      <div onClick={this.handleClick()}>
        <div className="card">
          <h3 className="card-text"> { this.checkIfCardFlipped ? this.props.name : "" } </h3>
          <img src={ this.props.symbol } alt={this.props.name} className="symbol" /> 
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
	return {
    cards: state.cards,
    flippedCards: state.flippedCards
	}
}

const connectedMatchCard = connect(mapStateToProps, {flipCard})(MatchCard)

export default connectedMatchCard 