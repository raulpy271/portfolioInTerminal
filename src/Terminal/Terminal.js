import React from 'react';
import TopBar from '../TopBar/TopBar.js'
import TerminalOutput from '../TerminalOutput/TerminalOutput.js'
import './Terminal.css'


class TerminalWindow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top :  0,
      left : 0,
      width : 0,
      height : 0,
      lastTouchX : 0,
      lastTouchY : 0
    }
  }


  defaultSizeInPercentage = 60


  componentDidMount = () => {
    let heightOfScreen = window.innerHeight
    let widthOfScreen = window.innerWidth
    let top = this.calculatesTheValueOfAdimensionToCenterElement(
      heightOfScreen, this.defaultSizeInPercentage)
    let left = this.calculatesTheValueOfAdimensionToCenterElement(
      widthOfScreen, this.defaultSizeInPercentage)


    this.setState({
      top    : top,
      left   : left,
      width  : this.defaultSizeInPercentage, 
      height : this.defaultSizeInPercentage 
    })
  }


  updatePositionWhenHoldClick = clickEvent => {
    this.setState({
      top  : this.state.top  + clickEvent.movementY,
      left : this.state.left + clickEvent.movementX
    }) 
  }


  updatePositionWhenHoldTouch = touchEvent => {
    if (touchEvent.touches.length === 1 ) {
      let touch = touchEvent.touches[0]
      let movementX = touch.clientX - this.state.lastTouchX
      let movementY = touch.clientY - this.state.lastTouchY
      this.setState({
        top  : this.state.top  + movementY,
        left : this.state.left + movementX,
        lastTouchX : touch.clientX,
        lastTouchY : touch.clientY
      })
    }
  }


  click = mouseEvent => {
    window.onmousemove = this.updatePositionWhenHoldClick 
    window.onmouseup = this.endClick
  }


  endClick = () => {
    window.onmousemove = null
    window.onmouseup   = null
  }


  touch = touchEvent => {
    let touch = touchEvent.touches[0]
    window.ontouchmove = this.updatePositionWhenHoldTouch
    window.ontouchend  = this.endTouch
    this.setState({
      lastTouchX : touch.clientX,
      lastTouchY : touch.clientY
    })
  }


  endTouch = () => {
    window.ontouchmove = null
    window.ontouchend  = null
  }


  calculatesTheValueOfAdimensionToCenterElement = 
    (dimensionOfSreen, lengthOfElementInPercentage) => {
    let lengthOfElement = 
        (lengthOfElementInPercentage / 100 ) * dimensionOfSreen
    return (dimensionOfSreen - lengthOfElement) / 2 
  } 


  render() {
    return (
      <div 
        className="terminalDialog"
        style = {{
          "top"    : String(this.state.top)  + "px",
          "left"   : String(this.state.left) + "px",
          "width"  : String(this.state.width)  + "%",
          "height" : String(this.state.height)  + "%"
        }}
      >
        <div onMouseDown={this.click} onTouchStart={this.touch}>
          <TopBar title="Terminal"/>
        </div>
        <div className="terminalScreen">
          <TerminalOutput/>
        </div>
      </div>
    )
  }
}


export default TerminalWindow;
