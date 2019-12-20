import React from 'react'
import GameBoard from './GameBoard'

class GameArea extends React.Component {

  state = {
		cards: []
	}

	componentDidMount() {
		return this.fetchCards()
	}

	fetchCards = () => {
		let url= 'http://localhost:3001/cards'
		fetch(url)
		.then(response => response.json())
		.then(cards => this.setState({
			cards: [...cards]
		}))
	}

  render () {
    console.log("state", this.state.cards)
    return(
      <div className="board">
        <h1>This is the game area</h1>
        <GameBoard cards = {this.state.cards} />
      </div>
    )
    
  }


}

export default GameArea