import './TopBar.css'


function Button(props) {
    return (
        <div className="button"
            style={{ 
                "backgroundColor" : props.color,
                "width"  : String(props.len) + "px",
                "height" : String(props.len) + "px"
            }}
        >
        </div>
    )
}

function TopBar(props) {
    return (
        <div className="top_bar" >
            <p id="title" > {props.title} </p>
            <div className="buttons">
                <Button color="red" len={10}/>
                <Button color="blue" len={10}/>
            </div>
        </div>
    )
}


export default TopBar;
