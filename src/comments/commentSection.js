import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faStar } from '@fortawesome/free-solid-svg-icons';

function CommentSection() {
  return (
    <div>
        <ListGroupItem variant="flush">
            <ListGroup.Item>
                <div>
                    <span>11:23 Dec 29 2020</span>
                    <div className="Comment-container">
                        <span>
                            <FontAwesomeIcon icon={faThumbsUp} color={'#FFCC00'} className="Comment-upvote-container"></FontAwesomeIcon>
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
                <span>Dapibus ac facilisis in</span>
            </ListGroup.Item>
            <ListGroup.Item>
                <div>
                    <span>11:23 Dec 29 2020</span>
                    <div className="Comment-container">
                        <span>
                            <FontAwesomeIcon icon={faThumbsUp} color={'#FFCC00'} className="Comment-upvote-container"></FontAwesomeIcon>
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
                Dapibus ac facilisis in
            </ListGroup.Item>
            <ListGroup.Item>
                <div>
                    <span>11:23 Dec 29 2020</span>
                    <div className="Comment-container">
                        <span>
                            <FontAwesomeIcon icon={faThumbsUp} color={'#FFCC00'} className="Comment-upvote-container"></FontAwesomeIcon>
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
                Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item>
                <div>
                    <span>11:23 Dec 29 2020</span>
                    <div className="Comment-container">
                        <span>
                            <FontAwesomeIcon icon={faThumbsUp} color={'#FFCC00'} className="Comment-upvote-container"></FontAwesomeIcon>
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
                Porta ac consectetur ac
            </ListGroup.Item>
        </ListGroupItem>
        <ListGroup.Item>
            <span>
                Please <a href="#">Sign In</a> To Continue
            </span>
            <div className="Comment-submission-container">
                <FormControl as='textarea' placeholder='Type a comment here' style={{paddingLeft: '2px', paddingRight: '2rem'}}></FormControl>
            </div>
            <div className="Comment-submission-container">
                <span>Rating:</span>
                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
            </div>
            <div>
                <Button variant="warning">Submit</Button>
            </div>
        
        </ListGroup.Item>
    </div>
  );
}

export default CommentSection;
