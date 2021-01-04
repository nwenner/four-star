import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

import {useAuth} from '../authentication/useAuth';

import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Comment from './comment';

function CommentSection(data) {
    const [comments, setComments]=useState([]);
    const auth = useAuth();

    useEffect(() => {
        async function fetchData() {
            await API.get('fourstar', `/comments/${data.movieId}`)
            .then(response => {
                setComments(response);
            })
            .catch(error => {
                console.log(`error requesting from /comments/1; ${error}`);
            });
        }
        fetchData();
    }, [data.movieId]);

    return (
        <div>
            <ListGroupItem variant="flush">
                {
                    comments.map((data,id)=> {
                        return <Comment key={id} comment={data}></Comment>
                    })
                }
            </ListGroupItem>
            <ListGroup.Item>
                {!auth.user && 
                    <span>
                        Please <a href="/login">Sign In</a> To Continue
                    </span>
                }
                {auth.user && 
                    <>
                        <div className="Comment-submission-container">
                            <FormControl as='textarea' placeholder='Type a comment here' style={{paddingLeft: '2px', paddingRight: '2rem'}}></FormControl>
                        </div>
                        <div className="Comment-submission-container">
                            <span>Rating:</span>
                            <div className="Comment-submission-rating">
                                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} ></FontAwesomeIcon>
                            </div>
                        </div>
                        <div>
                            <Button variant="warning">Submit</Button>
                        </div>
                    </>
                }
            
            </ListGroup.Item>
        </div>
    );
}

export default CommentSection;
