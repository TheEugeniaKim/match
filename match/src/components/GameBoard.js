import React from 'react'
import MatchCard from './MatchCard'

class GameBoard extends React.Component {

	state = {
		flippedCards: [], 
		match: 0 
	}

	setFlippedCards = (id) => {
		let flippedCard = this.props.cards.filter(card => card.id === id)
		return this.setState({
			flippedCard: [...flippedCard]
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