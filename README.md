# Portfolio In Terminal Style

![Terminal in browser](/public/example.gif)

This is a SPA in reactJS which a MacOS terminal style. The terminal is a draggable and resizable React component and has sections about me, so it's will is my personal portfolio for while. 

See the [demo](https://raulpy271.github.io/portfolioInTerminal) page.

If you are interested in using this app for your portfolio, see the sections: [How to setup](#how-to-setup) and [Deploy](#deploy).

#### To turn the terminal draggable i used this [library](https://github.com/raulpy271/DraggableDialog)

## How to setup

To use this page, first fork this repository and clone it on your machine, so you will put your information.

To edit the sections and put your information you should edit the `contentEN` object in the `src/text/` path.

Besides, and you can and add more sections creating more properties to the object. 

Or if you want to add support to another language you should create an object like these in the mentioned path and import it in the `src/text/textManager.js` file.

Read the files of the `src/text/` path and you'll understand more about how to edit, add more sections, or support for multiples languages. 

If something isn't clear feels free to open an issue.

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


