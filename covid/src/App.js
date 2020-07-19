import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from "axios";


function App() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
      ])
    .then(responseArr => {
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const countries = results.map(data => {
    return (
      <Card bg="light" text="dark" className="text-center" style={{ margin: "10px"}} >
        <Card.Body>
        <Card.Title>{data.country}</Card.Title>
      <Card.Text> Cases {data.cases}</Card.Text>
        </Card.Body>
      </Card>
    )
  });


  return (
    <div>
      <CardDeck>
  <Card bg="secondary" text="white" className="text-center" style={{margin: "10px"}}>
    
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        {latest.cases}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated} </small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white" className="text-center" style={{margin: "10px"}}>
    
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated} </small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white" className="text-center" style={{margin: "10px"}}>
    
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated {lastUpdated} </small>
    </Card.Footer>
  </Card>
</CardDeck>
{countries}
    </div>
  );
}


export default App;
