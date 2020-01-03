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
          () =>{
            this.executeMatch(cardObj)
          },
          1000
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
    return this.props.flippedCards.length < 2 ? false : true 
  }

  checkIfCardFlipped = (id) => {
    return this.props.flippedCards.some(flippedCard => flippedCard.id === id) ? true : false 
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
    console.log("flippedCards", this.props.flippedCards)
    console.log('cards', this.props.cards)
    // console.log('checkflip', this.checkIfCardFlipped(this.props.id))
    // console.log('match', this.matchCheck())
    
    
    return (
      <div className="card" onClick={() => this.handleClick(this.props.id)}>
        <h3 className="card-text"> { this.checkIfCardFlipped(this.props.id) ? this.props.name : "" } </h3>
        <img src={ this.checkIfCardFlipped(this.props.id) ? this.props.symbol : './question.png'} alt={this.props.name} className="symbol" /> 
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