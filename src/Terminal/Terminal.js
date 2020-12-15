import React from 'react';
import TopBar from '../TopBar/TopBar.js'
import TerminalOutput from '../TerminalOutput/TerminalOutput.js'
import './Terminal.css'


class TerminalWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top :  100,
            left : 100,
            unit : "px"
        }
    }


    setPosition = (top, left) => {
        this.setState({
            top : top,
            left : left
        }) 
    }


    updatePosition = mouseEvent => {
        let x = mouseEvent.movementX
        let y = mouseEvent.movementY
        let newTop  = this.state.top  + x
        let newLeft = this.state.left + y
        this.setPosition(newTop, newLeft)
    }


    click = mouseEvent => {
        window.addEventListener("onmousemove", this.updatePosition)
    }


    endClick = mouseEvent => {
        window.removeEventListener("onmousemove", this.updatePosition)
    }


    render() {
        return (
            <div 
                className="terminal_dialog"
                style = {{
                    "top"  : String(this.state.top)  + this.state.unit,
                    "left" : String(this.state.left) + this.state.unit
                }}
            >
                <div onMouseDown={this.click}
                     onMouseUp={this.endClick}
                >
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
