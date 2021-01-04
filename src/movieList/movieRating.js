import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function MovieRating(data) {
    return (
        <div>
            <FontAwesomeIcon icon={faStar} color={data.rating >= 0.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color={data.rating >= 1.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color={data.rating >= 2.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color={data.rating >= 3.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color={data.rating >= 4.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
            ({data.rating} Average)
        </div>
    );
}

export default MovieRating;
