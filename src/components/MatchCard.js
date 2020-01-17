import React from 'react'
import {connect} from 'react-redux'
import {addFlippedCard, removeFlippedCard, match} from '../redux/actions'

class MatchCard extends React.Component {
  
  handleClick = () => { 
    let cardObj = this.props.cards.find(card => card.id === this.props.id)
    if (this.props.flippedCards.length === 0) {
      return this.props.addFlippedCard(cardObj)
    }
    else if (this.props.flippedCards.length === 1) {
      if (this.checkIfCardFlipped(cardObj.id)){
        return this.props.removeFlippedCard(cardObj)
      }
      else {
        this.props.addFlippedCard(cardObj)
        return setTimeout(
          () => {
            this.executeMatch(cardObj)
          },
          500
        )
      }
    }
    else if (this.props.flippedCards.length >= 2 ) {
      if (this.checkIfCardFlipped(cardObj.id)) {
        return this.props.removeFlippedCard(cardObj)
      }
    }
  }

  checkTwoCardsFlipped = () => {
    return this.props.flippedCards.length < 2
  }

  checkIfCardFlipped = (id) => {
    return this.props.flippedCards.some(flippedCard => flippedCard.id === id)
  }

  executeMatch(cardObj) {
    if (this.props.flippedCards[0].name === cardObj.name) {
      return this.props.match(cardObj.name)
    }
    else {
      return null 
    }
  }

  render() {
  
    return (
        <div className={this.checkIfCardFlipped(this.props.id) ? "card flipped" : "card unflipped"} onClick={() => this.handleClick(this.props.id)}> 
          
          <div className="card-front">
            <h3  style={{color: 'black'}}> { this.props.name } </h3>
            <img src={this.props.symbol } alt={this.props.name} className="symbol" /> 
          </div>

          <div className="card-back">
            <h3 className="card-text" style={{color: '#778899'}}> </h3>
            <img src={ './question.png'} alt={this.props.name} className="symbol" /> 
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

const connectedMatchCard = connect(mapStateToProps, {
  addFlippedCard, 
  removeFlippedCard, 
  match
})(MatchCard)

export default connectedMatchCard 