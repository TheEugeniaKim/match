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
		let url= 'http://localhost:3000/cards'
		fetch(url)
		.then(response => response.json())
		.then(cards => this.setState({
			cards: [...cards,...cards]
		}))
	}

  render () {
    return(
      <div className="board">
        <GameBoard cards = {this.state.cards} />
      </div>
    )
    
  }


}

export default GameArea