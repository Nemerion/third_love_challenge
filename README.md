This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

[HERE](https://martinscocco.bitbucket.io/) is a demo with the page running in production mode

## Dependencies

The following dependencies were added to the proyect:
  - react, react-dom and react-scripts: JavaScript library for building user interfaces
  - redux and react-redux: javaScript library for managing application state
  - axios: REST Promise based HTTP client for the browser
  - bootstrap, react-bootstrap, reactstrap and node-sass: pre-styled, syntactic sugar and responsive/mobile-first css functionality
  - core-js, react-app-polyfill: polyfills which adds support for older browsers (E.g. IE11)
  - react-html-parser: utility for converting HTML strings into React components
  - react-image-gallery: react component for building image galleries and carousels
	
## Design pattern

This app tries to follow the 'flux/redux' design pattern, which involves the following concepts:
  - only one single source of truth: the state of the application is stored in a single store
  - state is read-only: the only way to change the state is to emit an action
  - changes are made with pure functions: this functions are the Reducers, which allow to navigate through states
  - assumes you never mutate your data: the reducer instead of modifing the information, returns a new object
  - the flow of processing the data is unidirectional

The app is saves the state information in one place using redux, improving the communication between components.
It has two reducers:
  - info: the endpoint with the json info
  - swatch: an array containing the information of the product after the color is selected

### Exceptions

There are few exceptions inside this proyect which do not follows this pattern purely (some of the state declarations
lives only inside the components that creates them and do not leave, mostly because they are not neccessary anywhere but
there), but the main flow does, which is the important part.

## Folder hierarchy
<pre>
src
├── actions
│   └── index.js
│
├── components
│   ├── carousel
│   │   ├── styles (from the component creator )
│   │   ├── carousel_style.scss
│   │   └── carousel.js
│   │
│   ├── customizations
│   │   ├── customization_style.scss
│   │   └── customizations.js
│   │
│   ├── descriptions
│   │   ├── description_style.scss
│   │   └── description.js
│   │
│   ├── populate
│   │   ├── populate_style.scss
│   │   └── populate.js
│   │
│   ├── swatches
│   │   ├── swatches_style.scss
│   │   └── swatches.js
│   │
│   ├── App.js
│   └── App_style.scss
│
├── constants
│   └── index.js
│
├── middlewares
│   └── async.js
│
├── reducers
│   ├── index.js
│   ├── info.js
│   └── swatch.js
│
├── index.js
└── polyfills.js
</pre>

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
The build is minified and the filenames include the hashes.
