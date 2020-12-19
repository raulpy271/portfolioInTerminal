import React from 'react'
import TextTyped from '../TextTyped/TextTyped.js'
import './TerminalOutput.css'
import Content from '../Content.js'


class TerminalOutput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeToWaitTheCommadIsTyped : 2000,
      section        : "sections",
      promptString   : Content["prompt"],
      sectionName    : Content["sections"]["name"],
      sectionContent : ""
    }
  }

  
  updateSectionNameAndClearContent = section => {
    this.setState({
      section        : section,
      sectionName    : Content[section]["name"],
      sectionContent : ""
    })
  }


  updateSectionContent= section => {
    this.setState({
      sectionContent : Content[section]["sectionContent"]
    })
  }


  changeSection = section => {
    let timeToWaitAfterTheCommandIsTyped = 500
    this.updateSectionNameAndClearContent(section)
    setTimeout(
      this.updateSectionContent, 
      this.state.timeToWaitTheCommadIsTyped + timeToWaitAfterTheCommandIsTyped,
      section,
    ) 
  }


  componentDidMount = () => {
    this.changeSection(this.state.section)
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
