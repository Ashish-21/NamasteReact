import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React Element(js object) => HTMLElement(object)
//This is how we create heading using react
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//This is how we create heading using jsx
//This is not a valid javascript
//jsx => react.createElement => ReactElement(js object) => HTMlElement(object)
const jsxHeading = <h1>Namaste React using JSX</h1>;

const Title = () => <h1>This is Title using Component</h1>;

const Title2 = () => <h1>This Is Title 2</h1>;

//React Component
const HeadingComponent = () => {
	return (
		<div>
			{Title2()}
			<Title />
			<h1>This is React Funtional Component</h1>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
