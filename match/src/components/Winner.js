import React from 'react'
import {connect} from 'react-redux'

class Winner extends React.Component {

  onClick = () => {
    window.location.reload()
  }

  render(){
    return (
      <div className="directions">
        <h1> CONGRATULATIONS! YOU WIN!</h1>
        <br/>
        <button className="toggle-button" onClick={e=> {
          this.onClick()
        }}>Play Again</button>
      </div>
    )
  }

}

function mapStateToProps(state){
	return {
    cards: state.cards,
	}
}

const connectedWinner = connect(mapStateToProps, {})(Winner)

export default connectedWinner