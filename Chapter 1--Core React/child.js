const child = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Sibling-1........"),
    React.createElement("h4", {}, "Sibiling-2........"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(child);
