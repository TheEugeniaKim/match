import React from 'react'
import {connect} from 'react-redux'
import {addFlippedCard} from '../redux/actions'

class MatchCard extends React.Component {
  
  handleClick = () => { 
    let cardObj = this.props.cards.find(card => card.id === this.props.id)
    console.log('click', cardObj)
    console.log(this.checkIfCardFlipped())
    if (this.checkTwoCardsFlipped() === false) {
      return this.props.addFlippedCard(cardObj)
    }
    else {
      return null 
    }
  }

  checkTwoCardsFlipped = () => {
    return this.props.flippedCards.length < 2 ? false : true 
  }

  checkIfCardFlipped = (id) => {
    return this.props.flippedCards.some(flippedCard => flippedCard.id === id)

  }

  render() {
    // console.log('card', this.props.card)
    // console.log("flippedCards", this.props.flippedCards)
    // console.log('checkflip', this.checkIfCardFlipped(this.props.id))
    return (
      <div className="card" onClick={() => this.handleClick()}>
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

const connectedMatchCard = connect(mapStateToProps, {addFlippedCard})(MatchCard)

export default connectedMatchCard 