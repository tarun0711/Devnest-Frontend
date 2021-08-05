import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Container, Row, Col, Button, Alert, Card, Form} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header   className="AppHeader">
      <Container>
      <Form>
        <Row>
          <Col md>

            <Form.Group contolId="formEmail">
              <Form.Label>Email  Address</Form.Label>
              <Form.Control type="email" placeholder="tarun@gmail.com"/>
            </Form.Group>

          </Col>
          <Col md>

            <Form.Group  contolId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="ta48849cdv"/>
            </Form.Group>

          </Col>
        </Row>

        <Form.Text className="text-muted">
                <h2 style={{marginTop:"3vh", color:"white" }}>Goodtoseeyou!</h2>
        </Form.Text>

        <Button variant="secondary" type="su bmit" style={{marginTop:"1vh"}} onClick={(e) => window.location.href="https://www.facebook.com"}>Log In</Button>
      </Form>


      <Card className="mb-3" style={{color:"black", marginTop:"20px" }}>
        <Card.Img style={{padding:"30px", border:"4px solid black"}} src="https://picsum.photos/100/50" />
        <Card.Body>
          <Card.Title>
            <h1>Hey,</h1>
          </Card.Title>
          <Card.Text>
            <h2>This is an example of react bootstrap cards.</h2>
          </Card.Text>
          <Button variant="primary"  onClick={(e) =>  window.location.href='https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page'} >Read More</Button>
          <Alert variant="success">This is a Button</Alert>
        </Card.Body>
      </Card>

      
{/* 
      <Button>Test Button</Button> */}
      </Container>
      </header>
    </div>
  );
}

export default App;
