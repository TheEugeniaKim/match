import React from 'react'
import {connect} from 'react-redux'

class DirectionsModal extends React.Component {
  
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  }
  
  render(){
    if (!this.props.show) {
      return null
    }
    return (
      <div className="directions">
        <h2>Match Directions</h2>
        <div className="content">
          <p>
            Welcome to match! This is a memory game where you have 5 minutes to correctly match
            the cards with the same animal by turning over cards in pairs. 
            <br/>
            <br/>
            Turn over the cards by clicking on the cards you want to turn over. If you run out of time you lose. 
            <br/>
            <br/>
            If you correctly match all of the cards before time runs out you win. 
          </p>
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={e => {
            this.onClose(e);
          }} > Close </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
	return {
    cards: state.cards
	}
}

const connectedDirectionsModal = connect(mapStateToProps, null)(DirectionsModal)

export default connectedDirectionsModal