import turnDraggable from '../../utils/turnDraggable.js'
import TopBar from '../TopBar/TopBar.js'
import TerminalOutput from '../TerminalOutput/TerminalOutput.js'
import './Terminal.css'


const TerminalWindow = () => {
  let title = "Terminal"
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


const TerminalDraggable = turnDraggable(TerminalWindow, {
  "dialogId" : "terminalDialog",
  "elementThatCaptureTheClick" : "topBar",
  "centerElement" : true
})


export default TerminalDraggable
