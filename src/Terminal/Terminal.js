import {useEffect} from 'react'
import Draggable from 'draggable_dialog'
import TopBar from '../TopBar/TopBar.js'
import TerminalOutput from '../TerminalOutput/TerminalOutput.js'
import Content from '../Content.js'
import './Terminal.css'


const TerminalWindow = () => {
  useEffect( () => 
    new Draggable({
      "dialogId" : "terminalDialog",
      "elementThatCaptureThatClickId" : "topBar"
    })
  )
  let title = Content["title"]
  return (
    <div id="terminalDialog">
      <div>
        <TopBar title={title}/>
      </div>
      <div className="terminalScreen">
        <TerminalOutput/>
      </div>
    </div>
  )
}


export default TerminalWindow
