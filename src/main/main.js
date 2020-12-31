import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

function Main() {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/marvel_the_avengers.jpeg" />
            <Card.Body>
                <Card.Title>The Avengers</Card.Title>
                <Card.Text>
                This is the first movie
                </Card.Text>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                (1.23 Average)
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/sw_rise_of_skywalker.jpeg" />
            <Card.Body>
                <Card.Title>Star Wars Episode 9: The Rise of Skywalker</Card.Title>
                <Card.Text>
                The last in the Skywalker Saga
                </Card.Text>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                (2.85 Average)
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/sw_the_mandalorian.jpeg" />
            <Card.Body>
                <Card.Title>The Mandalorian</Card.Title>
                <Card.Text>
                Everyone loves Baby Yoda!
                </Card.Text>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                (3.32 Average)
            </Card.Body>
        </Card>
    </div>
  );
}

export default Main;
