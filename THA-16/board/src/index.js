import React from 'react';
import ReactDOM  from 'react-dom';
import Grid from './Board';
import './style.css';


const App = () =>
{
    return(
        <div className="container">
            <Grid />
        </div>
    )
};

ReactDOM.render(<App/>,document.getElementById('root'));