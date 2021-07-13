import React from "react";
import ReactDOM  from "react";
import grid from "./Board";
import "./style.css";


const App = () =>
{
    return(
        <div className="container">
            <grid/>
        </div>
    )
};
ReactDOM.render(<App/>,document.getElementById("root"));