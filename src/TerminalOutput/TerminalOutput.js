import React from 'react'
import TextTyped from '../TextTyped/TextTyped.js'
import {getSection} from '../text/textManager.js'
import {
  setLanguageFromQueryParamOrBrowserLanguage} from '../utils/languages.js'
import './TerminalOutput.css'


class TerminalOutput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeToWaitTheCommadIsTyped : 1000,
      section        : "aboutme",
      promptString   : getSection("prompt"),
      sectionName    : "",
      sectionContent : ""
    }
  }


  componentDidMount = () => {
    window.onload = () => {
      setLanguageFromQueryParamOrBrowserLanguage()
      setTimeout(this.changeSection, 1000, this.state.section)
    } 
  }


  changeSection = section => {
    let timeToWaitAfterTheCommandIsTyped = 100
    this.updateSectionNameAndClearContent(section)
    setTimeout(
      this.updateSectionContent, 
      this.state.timeToWaitTheCommadIsTyped + timeToWaitAfterTheCommandIsTyped,
      section,
    ) 
  }


  updateSectionNameAndClearContent = section => {
    this.setState({
      section : section,
      sectionContent : ""
    })
    this.updateSectionName(section)
  }


  updateSectionName = section => {
    let text = "cat " + section + ".txt"
    let time = this.state.timeToWaitTheCommadIsTyped / text.length


    this.textTyped.setState({
      timeToWaitBetweenEachChar : time,
      textInsideTerminalText    : '',
      charsToBeShowed           : text.split("")
    })
    this.textTyped.componentDidMount()
  }


  updateSectionContent = section => {
    this.setState({
      sectionContent : getSection(section)
    })
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
          onClick={() => this.changeSection("aboutme")}
          href="#aboutme">About Me</a>
        <a id="sectionsLinks" 
          onClick={() => this.changeSection("skills")}
          href="#skills">Skills</a>
        <a id="sectionsLinks" 
          onClick={() => this.changeSection("contact")}
          href="#contact">Contact</a>
      </p>
      </>
    )
  }
}


export default TerminalOutput;
