import Languages from '../Languages/Languages.js'
import './TopBar.css'
import {
  hideOrShowElement, 
  changeTextColor,
  changeBackgroundColors
  } from './buttonsFunction.js'


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
  let red    = "#f00"
  let yellow = "#ff0"
  let green  = "#0f0"


  const redButtonFunction = () => hideOrShowElement(
    document.querySelector("div.languages")
  )
  const yellowButtonFunction = () => changeTextColor(
    document.querySelector("div#terminalDialog")
  )
  const greenButtonFunction = () => changeBackgroundColors(
    document.querySelector("div#terminalDialog")
  )


  return (
    <div id="topBar" >
      <div className="buttons">
        <Languages/>
        <Button onClick={redButtonFunction} color={red}/>
        <Button onClick={yellowButtonFunction} color={yellow}/>
        <Button onClick={greenButtonFunction} color={green}/>
      </div>
      <p id="title" > {props.title} </p>
    </div>
  )
}


export default TopBar
