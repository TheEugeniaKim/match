import React from 'react'
import MatchCard from './MatchCard'

class GameBoard extends React.Component {
	
	
	render(){
		console.log(this.props.cards)
		return(this.props.cards.map(card => {
			return (
				<MatchCard 
					name={card.name} 
					symbol={card.symbol}
					key={card.id}
				/>
			)
		}))
	}

}

export default GameBoard