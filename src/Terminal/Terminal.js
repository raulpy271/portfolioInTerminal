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
      height : 0
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


  updatePosition = mouseEvent => {
    let x = mouseEvent.movementX
    let y = mouseEvent.movementY
    this.setState({
      top  : this.state.top  + y,
      left : this.state.left + x
    }) 
  }


  click = mouseEvent => {
    document.onmousemove = this.updatePosition
    document.onmouseup = this.endClick
  }


  endClick = mouseEvent => {
    document.onmousemove = null
    document.onmouseup   = null
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
        <div onMouseDown={this.click} >
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
