// const heading = React.createElement(
//     "h1",
//     {id:"heading", xyz:"abc"},
//     "Hello World from React!"
//     );

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 Tag</h1>
        <h2>I'm h1 Tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 Tag</h1>
        <h2>I'm h1 Tag</h2>
    </div>
</div>

ReactElement(Object) => HTML(Browser Understand) */}

import React from "react";
import  ReactDOM  from "react-dom/client";
const parent = React.createElement(
    "div", 
    {id:"parent"},
    [React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm h1 Tag"),
        React.createElement("h2",{},"I'm h2 Tag"),
      ]),
      React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm h1 Tag"),
        React.createElement("h2",{},"I'm h2 Tag"),
      ])]
);

//JSX

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);