import React from 'react'
import MatchCard from './MatchCard'

class GameBoard extends React.Component {
	
	shuffleCards = (array) => {
		for (var i = array.length - 1; i>0; i-- ){
			var j = Math.floor(Math.random() * (i + 1))
			var temp = array[i]
			array[i] = array[j]
			array[j] = temp 
		}
	}
	
	render(){
		let deck = this.shuffleCards(this.props.cards)
			return(this.props.cards.map(card => {
				return (
					<MatchCard 
						name={card.name} 
						symbol={card.symbol}
						key={card.id}
					/>
				)
			})
			)
	
	}

}

export default GameBoard