import { Badge, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function AdminMovieRow(data) {

  return (
    <tr>
        <td>{data.movie.id}</td>
        <td>
          <Image rounded src={data.movie.imgsrc ? data.movie.imgsrc : '/placeholder.jpg'} className="Admin-thumbnail"/>
        </td>
        <td>{data.movie.title}</td>
        <td>{data.movie.description}</td>
        <td><Badge variant="warning" className="Card-badge">{data.movie.genre}</Badge></td>
        <td>
          <FontAwesomeIcon icon={faEdit} color="#FFCC00" size="lg" className="Admin-edit"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faTimesCircle} color="#dc3545" size="lg" className="Admin-edit"></FontAwesomeIcon>
        </td>
    </tr>
  );
}

export default AdminMovieRow;

