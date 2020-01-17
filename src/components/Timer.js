import React, { Component } from 'react'
import TimesUp from './TimesUp'

export default class Timer extends Component {
  state = {
    secondsElapsed: 300,
    pause: this.props.pauseTimer 
  }
  
  componentDidMount(){
    this.myInterval = setInterval(() => {
      const remainingTime = this.state.secondsElapsed

      if (remainingTime > 0 && !this.state.pause) {
        this.setState({
          secondsElapsed: remainingTime - 1
        })
      }
    }, 1000)
  }

  fancyTimeFormat = (remainingTime) => {   
    let hrs = ~~(remainingTime / 3600)
    let mins = ~~((remainingTime % 3600) / 60)
    let secs = ~~remainingTime % 60

    let ret = ""

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "")
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "")
    ret += "" + secs
    return ret
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  componentDidUpdate(previousProps, previousState){
    if (previousProps.pauseTimer !== this.props.pauseTimer) {
      this.setState({
        pause: this.props.pauseTimer
      })
    }
  }

  render() {
    const remainingTime = this.state.secondsElapsed 
    return (
      <div>
        { remainingTime === 0 
          ? <TimesUp /> 
          : <h1>Time Remaining: {this.fancyTimeFormat(remainingTime)} </h1>
        }
      </div>
    )
  }
}

