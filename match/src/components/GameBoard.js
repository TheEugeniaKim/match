import React from 'react'
import MatchCard from './MatchCard'
import {connect} from 'react-redux'

class GameBoard extends React.Component {
	
	// handleClick = (id) => { 
  //   let cardObj = this.props.cards.find(card => card.id === id)
  //   console.log('click', cardObj)
  //   return null
  //   // if (this.checkTwoCardsFlipped() === true) {
  //   //   return null 
  //   // }
  //   // else {flipCard(cardObj)}
	// }
	
	render(){
		return this.props.cards.map(card => {
			return (
				<MatchCard 
					name={card.name} 
					symbol={card.symbol}
					id={card.id}
					key={card.id}
					// onClick={this.handleClick(card.id)}
				/>
			)
		})
	}
}

function mapStateToProps(state){
	return {
		cards: state.cards 
	}
}

const connectedGameBoard = connect(mapStateToProps, null)(GameBoard)

export default connectedGameBoard