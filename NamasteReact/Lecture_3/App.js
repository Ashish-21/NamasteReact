import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React Element(js object) => HTMLElement(object)
//This is how we create heading using react
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//This is how we create heading using jsx
//This is not a valid javascript
//jsx => react.createElement => ReactElement(js object) => HTMlElement(object)
const jsxHeading = <h1>Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
