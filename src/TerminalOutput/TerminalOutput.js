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
      sectionName    : "",
      sectionContent : ""
    }
  }


  updateSectionName = section => {
    let text = "cat " + Content[section]["name"] + ".txt"
    let time = this.state.timeToWaitTheCommadIsTyped / text.length


    this.textTyped.setState({
      timeToWaitBetweenEachChar : time,
      textInsideTerminalText    : '',
      charsToBeShowed           : text.split("")
    })
    this.textTyped.componentDidMount()
  }


  updateSectionNameAndClearContent = section => {
    this.setState({
      section : section,
      sectionContent : ""
    })
    this.updateSectionName(section)
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
    window.onload = () => 
      setTimeout(this.changeSection, 1000, this.state.section)
  }
  

  render() {
    return (
      <>
      <div className="outputDiv">
        <div className="promptDiv">
          <p id="promptText">{this.state.promptString}</p>
          <TextTyped 
            ref={ref => this.textTyped = ref} 
            totalTime={0} text={""} 
          />
        </div>
        <div id="outputText">
          <br/>
          {this.state.sectionContent}
        </div>
      </div>


      <p id="sections">
        <a id="sectionsLinks" 
          onClick={() => this.changeSection("sections")}
          href="#aboutme">About Me</a>
        <a id="sectionsLinks" href="#skills">Skills</a>
        <a id="sectionsLinks" 
          onClick={() => this.changeSection("contact")}
          href="#contact">Contact</a>
      </p>
      </>
    )
  }
}


export default TerminalOutput;
