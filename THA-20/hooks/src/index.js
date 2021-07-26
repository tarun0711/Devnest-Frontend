import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style.css'

const Hooks = () =>
{
    return(
        <div className="container">
            <App/>
        </div>
    )
}

ReactDOM.render(
    <Hooks />
   ,document.getElementById('root'));