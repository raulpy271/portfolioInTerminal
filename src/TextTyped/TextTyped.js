import React from 'react'
import Cursor from '../Cursor/Cursor.js';
import './TextTyped.css'


class TextTyped extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeToWaitBetweenEachChar : props.totalTime / props.text.length,
      textInsideTerminalText : '',
      charsToBeShowed : props.text.split('')
    }
  }


  checkIfLeftCharToBeShowed = () => {
    return Boolean(String(this.state.charsToBeShowed) !== "")
  }


  showOneChar = () => {
    let [head, ...tail] = this.state.charsToBeShowed
    let newText = this.state.textInsideTerminalText + head
    this.setState({
      textInsideTerminalText : newText,
      charsToBeShowed : tail
    })
  }


  showACharIfIsMissingACharToBeShown = () => {
    if (this.checkIfLeftCharToBeShowed()) {
      this.showOneChar()
    } else {
      clearInterval(this.interval)
    }
  }


  componentDidMount = () => {
    this.interval = setInterval(
      this.showACharIfIsMissingACharToBeShown, 
      this.state.timeToWaitBetweenEachChar
    )
  }


  render() {
    return (
      <div className="textTyped">
        <p id="textTyped">
          {this.state.textInsideTerminalText}<Cursor/>
        </p>
      </div>
    )
  }
}


export default TextTyped
