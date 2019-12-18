import React from 'react'
import MatchCard from './MatchCard'

class GameBoard extends React.Component {
	
	state = {}

	render(){
		return (
			<div>
				<h2> This is the game board area </h2>
				<MatchCard />
			</div>
		)
	}
}

export default GameBoard