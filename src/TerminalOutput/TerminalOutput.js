import React from 'react'
import TextTyped from '../TextTyped/TextTyped.js'
import './TerminalOutput.css'


class TerminalOutput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeToWaitTheCommadIsTyped : 2000,
      promptString   : "[raul@localhost]$ ",
      sectionName    : "ASCII",
      sectionContent : ""
    }
  }

  
  updateSection = (sectionName, sectionContent) => {
    this.setState({
      sectionName : sectionName,
      sectionContent : sectionContent
    })
  }


  componentDidMount = () => {
    let timeToWaitAfterTheCommandIsTyped = 200
    let sectionContent = `
░█▄█▒▄▀▄▒█▀▄▒█▀▄░▀▄▀
▒█▒█░█▀█░█▀▒░█▀▒░▒█▒
`
    setTimeout(
      this.updateSection, 
      this.state.timeToWaitTheCommadIsTyped + timeToWaitAfterTheCommandIsTyped,
      this.state.sectionName,
      sectionContent
    ) 
  }
  

  render() {
    return (
      <div className="outputDiv">
        <div className="promptDiv">
          <p id="promptText">{this.state.promptString}</p>
          <TextTyped totalTime={this.state.timeToWaitTheCommadIsTyped}>
            {"cat " + this.state.sectionName + ".txt"}
          </TextTyped>
        </div>
        <p id="outputText">{this.state.sectionContent}</p>
      </div>
    )
  }
}


export default TerminalOutput;
