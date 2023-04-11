import React from "react";
import  ReactDOM  from "react-dom/client";

// JSX (transpiles before it reaches the JS)- Parcel - Babel

// JSX => Babel transpiles it o React.createElement => ReactElement-JS Object => HTMLElement(render)



const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using jsx🚀
    </h1>
);

//React functional component
// Component Composition
const HeadingComponent = ()=>(
    <>
    <div id="container">
       <Title/> 
        <h1 className="heading">Namaste React functional component</h1>
    </div>
    <div id="container-2"></div>
    </>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);