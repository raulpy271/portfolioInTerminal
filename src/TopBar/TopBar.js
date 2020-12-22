import {useEffect} from 'react'
import './TopBar.css'
import {maximizeOrCentralizeScreen} from './buttonsFunction.js'


function Button(props) {
  let len = 12
  let margin = len / 2
  return (
    <div 
      className="button"
      onClick={props.onClick}
      style={{ 
        "color" : props.color,
          "backgroundColor" : props.color,
          "width"  : String(len) + "px",
          "height" : String(len) + "px",
          "marginLeft" : String(margin) + "px"
      }}
    >
    </div>
  )
}


function TopBar(props) {
  let element
  let red    = "#f00"
  let yellow = "#ff0"
  let green  = "#0f0"


  const assigmentElement = elementFromEffect => {
    element = elementFromEffect
  }


  useEffect(() => 
    assigmentElement(document.querySelector("div.terminalDialog"))
  )


  const redButtonFunction = () => maximizeOrCentralizeScreen(element)


  return (
    <div className="topBar" >
    <div className="buttons">
    <Button onClick={redButtonFunction} color={red}/>
    <Button onClick={redButtonFunction} color={yellow}/>
    <Button onClick={redButtonFunction} color={green}/>
    </div>
    <p id="title" > {props.title} </p>
    </div>
  )
}


export default TopBar;
