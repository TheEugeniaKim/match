import React from 'react'
import MatchCard from './MatchCard'
import { Icon } from 'semantic-ui-react'

class GameBoard extends React.Component {
	
	state = {}

	render(){
		return (
			<div className="board">
				<h2> This is the game board area </h2>
				<MatchCard />
			</div>
		)
	}
}

export default GameBoard