const child2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "child-1 Sibling-1........"),
    React.createElement("h4", {}, "child-1 Sibiling-2........"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "child-2 SIbiling-1........"),
    React.createElement("h4", {}, "child-2 Sibiling-2........"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(child2);
