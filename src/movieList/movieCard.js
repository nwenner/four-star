import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import MovieRating from '../rating/movieRating';
import { Badge } from 'react-bootstrap';

function MovieCard(data) {

  return (
    <Card style={{ width: '18rem' }}>
        <Link to={`/movie/${data.movie.id}`}>
            <Card.Img 
              variant="top" 
              src={data.movie.imgsrc ? data.movie.imgsrc : '/placeholder.jpg'} />
        </Link>
        <div className="Card-badge-container">
          <Badge 
            variant="warning" 
            className="Card-badge">{data.movie.genre}</Badge>
        </div>
        <Card.Body className="Card-body">
            <Card.Title>{data.movie.title}</Card.Title>
            <Card.Text>
            {data.movie.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <MovieRating 
              rating={data.movie.rating} 
              shouldShowRating="true"></MovieRating>
        </Card.Footer>
    </Card>
  );
}

export default MovieCard;

