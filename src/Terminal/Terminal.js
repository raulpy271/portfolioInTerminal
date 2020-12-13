import React from 'react';
import TopBar from '../TopBar/TopBar.js'
import './Terminal.css'


class TerminalWindow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            top : 0,
            left : 0
        }
    }


    updatePosition = (top, left) => {
        this.setState({
            top : top,
            left : left
        }) 
    }

    changePosition = () => {
        let newTop = this.state.top + 10
        let newLeft = this.state.left + 10
        this.updatePosition(newTop, newLeft)
    }


    render() {
        return (
            <div 
                className="terminal_dialog"
                style = {{
                    top : String(this.state.top) + "px",
                    left : String(this.state.left) + "px"
                }}
            >
                <div onClick={this.changePosition}>
                    <TopBar title="Terminal"/>
                </div>
            </div>
        )
    }
}


export default TerminalWindow;
