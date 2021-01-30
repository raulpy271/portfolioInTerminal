import React from 'react'
import {getSectionNames, getSectionName} from '../../text/textManager.js'
import './SectionBar.css'


class SectionBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "sections" : <></>
    }
  }


  componentDidMount = () => 
    window.addEventListener("load", this.renderSection)


  renderSection = () => {
    let renderedSection = (
      <> {getSectionNames().map(sectionName => 
        <a
          className="sectionLinks"
          key={sectionName}
          onClick={() => this.props.onClick(sectionName)}
          href={"#" + sectionName}
        >
          {getSectionName(sectionName)}
        </a>
      )}</>
    )


    this.setState({"sections" : renderedSection})
  }


  render() {
    return (
      <p className="sections">
        {this.state.sections}
      </p> 
    )
  }
}


export default SectionBar
