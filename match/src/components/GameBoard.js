import React from 'react'
import MatchCard from './MatchCard'

class GameBoard extends React.Component {
	
	state = {
		cards: []
	}

	componentDidMount() {
		return this.fetchCards()
	}

	fetchCards = () => {
		let url= 'http://localhost:3000/cards'
		fetch(url)
		.then(response => response.json())
		.then(cards => this.setState({
			cards: [...cards]
		}))
	}

	render(){
		console.log("cards in state", this.state.cards)
		return (
			<div>
				<h2> This is the game board area </h2>
				<MatchCard />
			</div>
		)
	}

}

export default GameBoard