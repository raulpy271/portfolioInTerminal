import React from 'react';
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


    render() {
        return (
            <div 
                className="terminal_dialog"
                style = {{
                    top : String(this.state.top) + "px",
                    left : String(this.state.left) + "px"
                }}
            >
                <p>Hello</p>
            </div>
        )
    }
}


export default TerminalWindow;
