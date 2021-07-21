import React from 'react';
import ReactDOM from "react-dom";
import Meme from './meme.jsx';
import './style.css';


const Fun = () => {
    return(
        <div className="container">
        <Meme/>
        </div>
    )
};

ReactDOM.render(<Fun/>,document.getElementById('root'));