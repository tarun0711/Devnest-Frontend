import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
// import {Container, Row, Col, Button, Alert, Card, Form} from 'react-bootstrap';
function App() 
{
  const [place, setPlace] = useState("");
  const[placeData, setPlaceData] = useState(null);
  const updatePlaceData =() => {
    
      fetch(`https://api.weatherapi.com/v1/current.json?key=ef4e0c9a2a4741419f221758211408&q=${place}`)
      .then( (res) => res.json())
      .then( (data) => {
        console.log(data);
        setPlaceData(data);
      })
    
  }
  return (
    <div className="App">
      <div className="Container">
        <div className="row">
          <div className="col-12 form">
            <input type="text" value={place} onChange={ (e)=> {setPlace(e.target.value);}}/>
            <button className="btn btn-primary" onClick={updatePlaceData}>Submit</button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon}  alt =""/>
                  <div className="place">{placeData.location.name}</div>
                </div>
              ) :(<h2> Place not Found </h2>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
