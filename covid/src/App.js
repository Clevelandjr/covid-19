import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


function App() {
  return (
    <div>
      <CardDeck>
  <Card bg="secondary" text="white" className="text-center">
    
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        100
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className="text-center">
    
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        0
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white" className="text-center">
    
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        99
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  );
}

export default App;
