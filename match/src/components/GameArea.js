import React from 'react'
import GameBoard from './GameBoard'
import DirectionsModal from './DirectionsModal'
import Timer from './Timer'
import {connect} from 'react-redux'
import {renderCards} from '../redux/actions'
import {directions} from '../redux/actions'
import Winner from './Winner'


class GameArea extends React.Component {
	
	componentDidMount() {
		return this.fetchCards()
	}

	shuffleCards = (array) => {
		let j = Math.floor(Math.random() * (array.length))
		for (let i = array.length - 1; i > 0; i--){
			[array[i], array[j]] = [array[j], array[i]]
		}
		return array 
	}
 
	fetchCards = () => {
		let url= 'http://localhost:3000/cards'
		fetch(url)
		.then(response => response.json())
		.then(array => {
			let cards = this.shuffleCards(array)
			this.props.renderCards(cards)
		})
	}

  render () {
		console.log('timeup', this.props.showTimesUp)
		return(
			<div>
				{ 
					this.props.showDirections ?
					<div className="backdrop"></div> :
					null
				}

				{
					this.props.showTimesUp ?
					<div className="backdrop"></div> :
					null
				}

				{
					this.props.cards.length === 0 ?
					<div className="backdrop"><Winner /></div> :
					null 
				}

				<h1>Welcome to Match!</h1> 
					<button className="toggle-button" onClick={e => {
						this.props.directions()
					}}>Directions</button>
					<br/>
					<br/>
					<DirectionsModal show={this.props.showDirections} > </DirectionsModal>
				
				<Timer />
			
				<div className="board"> 
					<GameBoard />
				</div>
				
			</div>
    )
	}
}


function mapStateToProps(state){
	return {
		cards: state.cards,
		flippedCards: state.flippedCards,
		showDirections: state.showDirections,
		showTimesUp: state.showTimesUp
	}
}

const connectedGameArea = connect(mapStateToProps, {renderCards, directions})(GameArea)

export default connectedGameArea