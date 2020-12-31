import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import CardColumns from 'react-bootstrap/CardColumns';

function Main() {
  return (
    <CardColumns className="Movie-container">
        <Card style={{ width: '18rem' }}>
            <a href="#meh">
                <Card.Img variant="top" src="/marvel_the_avengers.jpeg" />
            </a>
            <Card.Body>
                <Card.Title>The Avengers</Card.Title>
                <Card.Text>
                This is the first movie
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                (1.23 Average)
            </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }}>
            <a href="#meh">
                <Card.Img variant="top" src="/sw_rise_of_skywalker.jpeg" />
            </a>
            <Card.Body>
                <Card.Title>The Rise of Skywalker</Card.Title>
                <Card.Text>
                The last in the Skywalker Saga
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                (2.85 Average)
            </Card.Footer>
        </Card>
        <Card style={{ width: '18rem' }}>
            <a href="#meh">
                <Card.Img variant="top" src="/sw_the_mandalorian.jpeg" />
            </a>
            <Card.Body>
                <Card.Title>The Mandalorian</Card.Title>
                <Card.Text>
                Everyone loves Baby Yoda!
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                (3.32 Average)
            </Card.Footer>
        </Card>
    </CardColumns>
  );
}

export default Main;
