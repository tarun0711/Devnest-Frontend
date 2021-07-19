import React from "react";
import ReactDOM from "react-dom";
import Board from "./board";
import "./style.css";

// const App = () => {
//   return <Board />;
// };

const App = () => {
  return(
      <div className="container">
      <h1>Chess Board</h1>
          <Board/>
      </div>
  )
} 

ReactDOM.render(<App />, document.getElementById("root"));