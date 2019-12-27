import React from 'react'
import GameBoard from './GameBoard'
import {connect} from 'react-redux'
import {renderCards} from '../redux/actions'

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
			const cards = [...array]
			this.props.renderCards(this.shuffleCards(cards))
		})
	}

  render () {
		return(
      <div className="board">
        <GameBoard cards={this.state.cards} />
      </div>
    )
	}
}


function mapStateToProps(state){
	return {
		cards: state.cards 
	}
}

const connectedGameArea = connect(mapStateToProps, {renderCards})(GameArea)

export default connectedGameArea