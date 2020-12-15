import './TerminalOutput.css'


function TerminalOutput(props) {
    let text = `
[raul@localhost]$ cat ASCII.art
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
        <div className="outputDiv">
            <p id="outputText"> {text} </p>
        </div>
    )
}


export default TerminalOutput;
