import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Components/card.jsx';
import './style.css'

const App = () => {
    
    return(
        <div className="container">
            <Card title='Chicken Wings' cal ='500'/>
            <Card title='Chicken Tandoori' cal ='800'/>
            <Card title='Vda Pav' cal ='100'/>
            <Card title='Maggi' cal ='50'/>
            <Card title='Chole Chawal' cal ='200'/>
            <Card title='Rajmaa Chawal' cal ='200'/>
            <Card title='Aloo Pyaz' cal ='100'/>
            <Card title='French Fries' cal ='100'/>
            <Card title='Paneer Tikka' cal ='400'/>
            <Card title='Coke' cal ='50'/>
            <Card title='Diet Coke' cal ='20'/>
            <Card title='Momos' cal ='50'/>
            <Card title='Manchurian' cal ='100'/>
            <Card title='Mutton' cal ='1000'/>
            <Card/>
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));