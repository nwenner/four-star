import { ListGroup } from "react-bootstrap";

import { faStar, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Comment(data) {
    return (
        <ListGroup.Item>
            <div>
                <span>11:23 Dec 29 2020</span>
                <div className="Comment-container">
                    <span>
                        <FontAwesomeIcon icon={faThumbsUp} className="Comment-upvote-container"></FontAwesomeIcon>
                    </span>
                    <span className="Comment-upvote-container">
                        <FontAwesomeIcon icon={faThumbsDown} color={''}></FontAwesomeIcon>
                    </span>
                </div>
                <div className="Comment-container">
                    <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                </div>
            </div>
            <span>{data.comment.comment}</span>
        </ListGroup.Item>
    );
}

export default Comment;

