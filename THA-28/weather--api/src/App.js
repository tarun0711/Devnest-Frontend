import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { useEffect } from 'react';
import {Container, Row, Col, Button, Alert, Card, Form} from 'react-bootstrap';
function App() 
{
  useEffect( () => {
    fetch("https://api.weatherapi.com/v1/forecast.json?key=ef4e0c9a2a4741419f221758211408&q=ghaziabad&days=3")
    .then( (res) => res.json())
    .then( (data) => {
      console.log(data);
    })
  }, []);
  return (
    <div className="App">
      <Container>
        <Form>
          <Row>
            <Col md >

            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
