# Portfolio In Terminal Style

This is a SPA in reactJS which a MacOS terminal style. The terminal is a draggable and resizable React component and has sections about me, so it's will is my personal portfolio for while. 

See the [demo](https://www.raulpy271.github.io/portfolio_in_terminal_style/) page.

It's simple to edit the sections and content, so feels free to edit or use them as your portfolio, [this](#how-to-setup) section will help you.

## How to setup

To edit the sections and put your information you can edit the file `src/Content.js`, the application will read your information from this file.

If you want to add more sections, beyond the file with content, you should edit the render method of the `TerminalOutput` component, which are in the path `src/TerminalOutput/`. See the files mentioned to clearly understand how to edit.

## TODO 

As always, I have created a to-do list to help me to maintain a clear path to what to do, and help others to know what do to contribute. So, feels free to make this.

 - To add more sections is necessary to change two files. A good task is to make the application read the sections added and rendering them automatically, so the user will edit only one file.

