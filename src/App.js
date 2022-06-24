import React from "react"; // equivalent: const React = require('react')
import logo from "./logo.svg";

// Create a React component
function App(){
  // A React app must always return JSX
  // only one parent is allowed (use React.Fragment for an invisible div)
  return (
    <React.Fragment>
      <h1>test</h1>
      <p>React don't allow multiple parents.</p>
      <p>It must be wrapped in a div or an inivisible div like React.Fragment</p>
      <img src={logo}/>
    </React.Fragment>
    
  )
}

// must export out the component
export default App; // equivalent: module.export = App.js; 