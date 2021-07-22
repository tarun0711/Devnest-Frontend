import React from "react";
import  ReactDOM  from "react-dom";
import App1 from "./components/App";
import './style.css';

const App = () => {
    return(
        <div className="container">
            <App1/>
        </div>
    )
} 

ReactDOM.render(
        <React.StrictMode>
        <App />
        </React.StrictMode>, 
        document.getElementById('root')
        );