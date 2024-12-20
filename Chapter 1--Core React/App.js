const heading = React.createElement("h1", {id:'heading'}, "Hello React");
// 'tag',{attributes},content
console.log(heading) //prints object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);