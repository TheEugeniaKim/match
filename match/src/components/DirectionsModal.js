import React from 'react'
import {connect} from 'react-redux'
import '../Directions.css';

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
        <p>
          Welcome to match! This is a memory game where you have 5 minutes to correctly match
          the cards with the same animal by turning over cards in pairs. 
        <br/>
          If you run out of time you lose. 
        <br/>
          If you correctly match all of the cards before time runs out you win. 
        </p>
        <button onClick={e => {
          this.onClose(e);
        }} > Close </button>
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