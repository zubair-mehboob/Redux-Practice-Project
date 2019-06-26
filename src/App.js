import React from "react";
import Task from "./task";
//import List from "./list";
import "./App.css";

function App(props) {
  // const appReducer = (state, action) => {
  //   switch (action.type) {
  //     case "ADD_ITEM":
  //       return "ab";
  //     case "DELETE_ITEM":
  //       return state.filter(r => r.flavour !== action.flavour);
  //     default:
  //       return state;
  //   }
  // };

  // const result = appReducer(
  //   [{ flavour: "chocklate", count: 33 }, { flavour: "vanilla", count: 90 }],
  //   { type: "DELETE_ITEM", flavour: "vanilla" }
  // );
  //console.log(props);
  return (
    <div className="App">
      <Task />
      {/* <List /> */}
    </div>
  );
}

export default App;
