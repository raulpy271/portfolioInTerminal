import React from 'react'
import './Cursor.css'


class Cursor extends React.Component {
  constructor (props) {
    super(props)
    this.state  = {
      cursorChar : '█',
      timeToUpdate   : 500,
      cursorOnStatus : true,
      opacity : 100
    }
  }


  setCursorStatus = (is_on) => {
    if (is_on) {
      this.setState({
        cursorOnStatus : true,
        opacity : 100
      })
    } else {
      this.setState({
        cursorOnStatus : false,
        opacity : 0
      })
    }
  }


  changeCursorState = () => {
    this.setCursorStatus(!this.state.cursorOnStatus)
  }


  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.changeCursorState() 
    }, this.state.timeToUpdate)
  }


  componentWillUnmount = () => {
    clearInterval(this.interval)
  }


  render() {
    let opacity = String(this.state.opacity) + "%"
    return (
      <strong id="cursor" style={{"opacity" : opacity}}>
        {this.state.cursorChar}
      </strong>
    )
  }
}


export default Cursor
