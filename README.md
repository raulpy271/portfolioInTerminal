# Portfolio In Terminal Style

![Terminal in browser](/public/example.gif)

This is a SPA in reactJS which a MacOS terminal style. The terminal is a draggable and resizable React component and has sections about me, so it's will is my personal portfolio for while. 

See the [demo](https://www.raulpy271.github.io/portfolio_in_terminal_style/) page.

If you are interested in using this app for your portfolio, see the sections: [How to setup](#how-to-setup) and [Deploy](#deploy).

#### To turn the terminal draggable i used this [library](https://github.com/raulpy271/DraggableDialog)

## How to setup

To use this page, first fork this repository and clone in your machine, so you will put your information.

To edit the sections and put your information you can edit the file `src/Content.js`, the application will read your information from this file.

If you want to add more sections, beyond the file with content, you should edit the render method of the `TerminalOutput` component, which are in the path `src/TerminalOutput/`. See the files mentioned to clearly understand how to edit.

## Deploy

After making your changes, you can deploy the app on github pages. The steps are:

Install github pages as dev dependecies:

```sh
npm install gh-pages --save-dev
```

Put the link of your homepage in the `homepage` properties of `package.json`, the link is like this `http://{username}.github.io/{repo-name}`.

After all, run the command: 

```sh
npm run deploy
```


