import {useEffect} from 'react'
import Draggable from 'draggable_dialog'
import TopBar from '../TopBar/TopBar.js'
import TerminalOutput from '../TerminalOutput/TerminalOutput.js'
import Content from '../Content.js'
import './Terminal.css'


const TerminalWindow = () => {
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


const turnDraggable = (Component) => {
  return ( () => {
    useEffect( () =>
      new Draggable({
        "dialogId" : "terminalDialog",
        "elementThatCaptureTheClick" : "topBar",
        "centerElement" : true
      })
    )
    return <Component/>
  })
}


const TerminalDraggable = turnDraggable(TerminalWindow)


export default TerminalDraggable
