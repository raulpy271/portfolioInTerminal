import './TopBar.css'


function Button(props) {
    let len = 10
    let margin = len / 2
    return (
        <div className="button"
            style={{ 
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
        <div className="top_bar" >
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
