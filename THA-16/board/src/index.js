import React from 'react';
import ReactDOM  from 'react-dom';
import Grid from './Board.jsx';
import './style.css';

const App = () =>
{
    console.log("Hii");
    return(
        <div className="container">
        <h1>Chess Board</h1>
            <Grid />
        </div>
    )
};

ReactDOM.render(<App/>,document.getElementById('root'));