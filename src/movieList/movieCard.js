import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MovieCard(data) {

  return (
    <Card style={{ width: '18rem' }}>
        <Link to={`/movie/${data.movie.id}`}>
            <Card.Img variant="top" src={data.movie.imgsrc ? data.movie.imgsrc : '/placeholder.jpg'} />
        </Link>
        <Card.Body>
            <Card.Title>{data.movie.title}</Card.Title>
            <Card.Text>
            {data.movie.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <FontAwesomeIcon icon={faStar} style={{color: "#FFCC00"}}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            ({data.movie.rating} Average)
        </Card.Footer>
    </Card>
  );
}

export default MovieCard;

