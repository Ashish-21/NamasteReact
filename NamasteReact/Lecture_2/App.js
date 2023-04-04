/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>H1 Tag </h1>
 *      <h2>H2 Tag </h2>
 *  </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child1" }, [
		React.createElement("h1", {}, "H1 Tag"),
		React.createElement("h2", {}, "H2 Tag"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "H1 Tag"),
		React.createElement("h2", {}, "H2 Tag"),
	]),
]);

// const heading = React.createElement(
// 	"h1",
// 	{ id: "heading" },
// 	"Hello world from react"
// );
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
