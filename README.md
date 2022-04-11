# scratchjr-proof-of-concept
Proof of concept for implementation of Scratch Jr gui with Blockly. Shows a custom toolbox and horizontal renderer, and defines some blocks.
This is not production-ready code. It's not a start point for production-ready code. It's a proof of concept with no attention to best practices.

## install
`npm install` to install and get all dependencies.

## run
`npm start` should start up `webpack-dev-server`.

## contents
- Webpack config
- `src/`:
  - Block and toolbox definitions (`blocks/`)
  - Custom toolbox (`palette/`)
  - Horizontal renderer (`rendering/`)
  - A theme
  - Some CSS
  - Code that pulls it all together (`index.js`)
- A test page

