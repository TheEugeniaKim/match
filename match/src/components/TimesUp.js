import React, { Component } from 'react'
import {connect} from 'react-redux'
import {timesUpShow} from '../redux/actions'

class TimesUp extends Component {

  onClick = () => {
    window.location.reload()
  }

  componentDidMount(){
    return this.props.timesUpShow()
  }

  render() {
    return (
      <div className="directions">
        <h1>Time's Up! You Lost!</h1>
        <br/>
        <button className="toggle-button" onClick={e => {
          this.onClick()
        }}>Try Again</button>
      </div>
    )
  }
}


function mapStateToProps(state){
	return {
    cards: state.cards,
    showTimesUp: state.showTimesUp
	}
}

const connectedTimesUp = connect(mapStateToProps, {timesUpShow})(TimesUp)

export default connectedTimesUp
