import React from "react";
import  ReactDOM  from "react-dom";
import Button from "./components/button";
import './style.css';

const App = () => {
    return(
        <div className="container">
        <h1><b>Counters</b></h1>
        <div className="btnhldr">
            <Button/>
            <Button/>
            <Button/>
            <Button/>
        </div>
            
        </div>
    )
} 

ReactDOM.render(<App />, document.getElementById('root'));