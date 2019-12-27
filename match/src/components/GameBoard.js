import React from 'react'
import MatchCard from './MatchCard'

class GameBoard extends React.Component {

	state = {
		flippedCards: [], 
		match: 0 
	}

	setFlippedCards = (cardObj) => {
		return this.setState({
			flipCards: [...cardObj]
		})	
}
	
	render(){
		return this.props.cards.map(card => {
			return (
				<MatchCard 
					setFlippedCards={this.setFlippedCards}
					name={card.name} 
					symbol={card.symbol}
					key={card.id}
				/>
			)
		})
	}
}

export default GameBoard