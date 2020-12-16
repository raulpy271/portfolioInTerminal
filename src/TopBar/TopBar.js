import './TopBar.css'


function Button(props) {
  let len = 12
  let margin = len / 2
  return (
    <div className="button"
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
  return (
    <div className="topBar" >
    <div className="buttons">
    <Button color={red}/>
    <Button color={yellow}/>
    <Button color={green}/>
    </div>
    <p id="title" > {props.title} </p>
    </div>
  )
}


export default TopBar;
