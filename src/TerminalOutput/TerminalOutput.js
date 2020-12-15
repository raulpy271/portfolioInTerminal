import './TerminalOutput.css'


function TerminalOutput(props) {
    let text = `
[raul@localhost portfolio_in_terminal_style]$ cat ASCII.art
            .-"""-.
           '       \\
          |,.  ,-.  |
          |()L( ()| |
          |,'  \`".| |
          |.___.',| \`
         .j \`--"' \`  \`.
        / '        '   \\
       / /          \`   \`.
      / /            \`    .
     / /              l   |
    . ,               |   |
    ,"\`.             .|   |
 _.'   \`\`.          | \`..-'l
|       \`.\`,        |      \`.
|         \`.    __.j         )
|__        |--""___|      ,-'
   \`"--...,+""""   \`._,.-' mh
`
    if (props.text) {
        text = props.text
    }
    return (
        <div className="output-div">
            <p id="output-text"> {text} </p>
        </div>
    )
}


export default TerminalOutput;
