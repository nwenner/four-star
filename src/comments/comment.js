import { Badge, Button, ListGroup } from "react-bootstrap";

import { faStar, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useAuth} from '../authentication/useAuth';

function Comment(data) {
    let dateValue = new Date(data.comment.date).toLocaleString();

    const auth = useAuth();

    function onClickDelete() {
        data.onDeleteComment(data.comment);
    }

    return (
        <ListGroup.Item>
            <div className="Comment-component-container">
                <span>{dateValue}</span>
                <div className="Comment-container">
                    <span>
                        <FontAwesomeIcon icon={faThumbsUp} className="Comment-upvote-container"></FontAwesomeIcon>
                    </span>
                    <span className="Comment-upvote-container">
                        <FontAwesomeIcon icon={faThumbsDown} color={''}></FontAwesomeIcon>
                    </span>
                </div>
                <div className="Comment-container">
                    <FontAwesomeIcon icon={faStar} color={data.comment.rating >= 0.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} color={data.comment.rating >= 1.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} color={data.comment.rating >= 2.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} color={data.comment.rating >= 3.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} color={data.comment.rating >= 4.75 ? '#FFCC00' : ''}></FontAwesomeIcon>
                </div>
                {auth.userGroups && 
                    <div className="Comment-delete-container">
                        <Button variant="warning" size="sm" onClick={onClickDelete}>Delete</Button>
                    </div>
                }
            </div>
            <div className="Comment-user-info">
                <span className="Movie-text-label">User:</span>
                <span className="Margin-left--">{data.comment.username}</span>
                {data.comment.isAdmin && 
                  <Badge variant="warning" className={`Card-badge Margin-left--`}>Admin</Badge>
                }
            </div>
            <div className="Margin-top--">{data.comment.comment}</div>
        </ListGroup.Item>
    );
}

export default Comment;

