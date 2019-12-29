import React from 'react'
import {connect} from 'react-redux'
import {flipCard} from '../redux/actions'

class MatchCard extends React.Component {
  
  handleClick = (id) => { 
    return (null)
  }

  checkIfCardFlipped = () => {
    if (this.props.cards.map(flippedCard => flippedCard.id === this.props.id)) {
      return true 
    }
  }

  render() {
    return (
      <div onClick={this.handleClick(this.props.id)}>
        <div className="card">
          <h3 className="card-text"> {  this.props.name  } </h3>
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