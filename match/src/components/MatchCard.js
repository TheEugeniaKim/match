import React from 'react'

class MatchCard extends React.Component {

  state = {
    front: false  
  }

  handleClick = () => {
    return this.setState({
      front: !this.state.front
    })
  }

  render() {
    console.log("props", this.props)
    return (
      <div onClick={this.handleClick}>
        <div className="card">
          <h3 className="card-text"> { this.state.front ? this.props.name : "" } </h3>
          <img src={this.state.front ? this.props.symbol : "/question.png"} alt={this.props.name} className="symbol" /> 
        </div>
      </div>
    )
  }
}

export default MatchCard 