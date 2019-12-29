import React from 'react'
import MatchCard from './MatchCard'
import {connect} from 'react-redux'

class GameBoard extends React.Component {
	
	render(){
		console.log("gameboard", this.props.cards)
		return this.props.cards.map(card => {
			return (
				<MatchCard 
					name={card.name} 
					symbol={card.symbol}
					key={card.id}
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